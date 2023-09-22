const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
       required:true
    },
    Age:{
        type: Number,
       required:true
    },
    Courses:[{
        type: String,
       required:true
    }],
    parentName:{
        type:String,
       required:true
    }
});

module.exports = mongoose.model("Student", studentSchema);