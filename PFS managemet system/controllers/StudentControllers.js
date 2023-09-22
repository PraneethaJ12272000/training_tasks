const StudentModel = require("../models/Student");

module.exports.getStudents = async (req, res) => {
    const students = await StudentModel.find();
    res.send(students);
};

module.exports.saveStudents = (req, res) => {
    const student = req.body;
    StudentModel(student).save()
        .then((data) => {
            console.log("Saved successfully...");
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send({ msg: "Something went wrong" });
        })

};

module.exports.updateStudents = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(() =>
            res.send("Updated successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};

module.exports.deleteStudents = (req, res) => {
    const { id } = req.params;
    StudentModel.findByIdAndDelete(id)
        .then(() =>
            res.send("Deleted successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};

module.exports.findParent = async (req, res) => {
    const students = await StudentModel.aggregate([
        {
          $project: {
            from: 'parents',       
            localField: 'parentName', 
            foreignField: 'Name',     
            as: 'parentDetails'     
          }
        }
      ])
      
      res.send(students);
};