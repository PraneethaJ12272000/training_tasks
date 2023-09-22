const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT =process.env.PORT || 5000;
const dotenv = require("dotenv");

dotenv.config();

app.use(cors()); 
app.use(express.json());


mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

const userSchema = new mongoose.Schema({
  Name: {type : String},
  Age: {type : Number},
  Email :{ type : String}
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users =await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
});

app.post('/api/users', async (req, res) => {
  const {Name,Age,Email}=req.body;
  console.log(req.body)
  const putUser = new User ({
    Name, Age , Email 
  });
  await putUser.save();
  res.status(201).json(putUser);
  // try {
  //   const newUser =await User.create( req.body );
  //   res.json(newUser);
  // } catch (error) {
  //   res.status(500).json({ error: 'Error creating items' });
  // }


});

app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating item' });
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({message : "Deleting"});
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: 'Error deleting item' });
  }
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });