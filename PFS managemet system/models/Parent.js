const mongoose = require('mongoose');

const parentSchema =new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    Fee:{
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model("Parent", parentSchema);