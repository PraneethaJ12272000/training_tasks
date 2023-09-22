const express = require('express');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    profileImage: {
        type: String
    },
    refreshTokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
});

const User = mongoose.model('User', userSchema);

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
});

const Topic = mongoose.model('Topic', topicSchema);

const subtopicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    parentTopic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic', // Reference to the Topic model
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
    },
});

const Subtopic = mongoose.model('Subtopic', subtopicSchema);


const uploadFolderPath = 'Uploads';
if (!fs.existsSync(uploadFolderPath)) {
  fs.mkdirSync(uploadFolderPath)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const username = req.user;
        const userFolderPath = path.join(uploadFolderPath, username);
  
      if (!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath);
      }
  
      cb(null, userFolderPath);
    },
  filename: (req, file, cb) => {
    const username = req.user;
    const extension = file.originalname.split('.').pop();
    const filename = `${username}_${Date.now()}${extension}`;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

function verifyToken (req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Access token missing' });
    }

    try {
        console.log('Hi');
        const decoded = jwt.verify(token, accessTokenSecretKey);
        console.log(decoded);
        req.user = decoded.username;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid access token' });
    }
};

//Upload profile picture
app.post('/upload', verifyToken,   upload.single('profileImage'), async (req, res) => {
    const username = req.user; // User fetched from access token
    console.log(req.file.filename);
    const profileImage = req.file.filename;
    try {
        const user = await User.findOneAndUpdate(
            { username }, 
            { profileImage }, 
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Profile image uploaded successfully' });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

//Register
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username is already taken' });
    }

    // Hash the password before storing
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword,
        });
        await user.save();
        res.send('Registration successful');
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error (unique index violation)
            res.status(400).json({ message: 'Username is already taken' });
        } else {
            // Other error
            res.status(500).json({ message: 'An error occurred' });
        }
    }
});

//Login 
const accessTokenSecretKey = 'your-access-token-secret-key';
const refreshTokenSecretKey = 'your-refresh-token-secret-key';

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        const accesstoken = jwt.sign({ username }, accessTokenSecretKey, { expiresIn: '5m' });
        const refreshToken = jwt.sign({ username }, refreshTokenSecretKey, { expiresIn: '7d' }); // Adjust expiration as needed
       
        user.refreshTokens.push({ token: refreshToken });
        await user.save();

        res.json({ accesstoken, refreshToken });
        

    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/refresh-token', async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({ message: 'Refresh token is required' });
    }

    try {
        const decoded = jwt.verify(refreshToken, refreshTokenSecretKey);
        const user = await User.findOne({ username: decoded.username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const existingRefreshToken = user.refreshTokens.find(tokenObj => tokenObj.token === refreshToken);

        if (!existingRefreshToken) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }

        const newAccessToken = jwt.sign({ username: user.username }, accessTokenSecretKey, { expiresIn: '30m' });
        const newRefreshToken = jwt.sign({ username: user.username }, refreshTokenSecretKey, { expiresIn: '7d' });

        existingRefreshToken.token = newRefreshToken;        

        res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(401).json({ message: 'Invalid refresh token' });
    }
});

// Create a new topic
app.post('/topics', verifyToken, async (req, res) => {
    const {title}  = req.body;
    const username = req.user; 

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const topic = new Topic({
            title,
            owner: user._id,
        });

        await topic.save();
        res.json({ message: 'Topic created successfully' });
    } catch (error) {
        console.error('Error creating topic:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

//Create a new subtopic under a specific topic
app.post('/topics/:topicId/subtopics', verifyToken, async (req, res) => {
    const { title } = req.body;
    const username = req.user;
    const { topicId } = req.params;

    try {
        const user = await User.findOne({ username });                     

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const topic = await Topic.findById(topicId);

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        const subtopic = new Subtopic({
            title,
            owner: user._id,
            parentTopic: topic._id,
        });

        await subtopic.save();
        res.json({ message: 'Subtopic created successfully' });
    } catch (error) {
        console.error('Error creating subtopic:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});