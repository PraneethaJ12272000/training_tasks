const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const routesStudent = require("./routes/StudentRoutes");
const routesParent = require("./routes/ParentRoutes");
const routesFaculty = require("./routes/FacultyRoutes");

const cors = require('cors');
const app = express();
const PORT = process.env.PORT | 7000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use('/api/Students',routesStudent);
app.use('/api/Parents',routesParent);
app.use('/api/Faculty',routesFaculty);

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log(`Listening at ${PORT}`));