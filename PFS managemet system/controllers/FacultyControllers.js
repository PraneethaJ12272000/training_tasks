const FacultyModel = require("../models/Faculty");

module.exports.getFaculty = async (req, res) => {
    const faculty = await FacultyModel.find();
    res.send(faculty);
};

module.exports.saveFaculty = (req, res) => {
    const faculty = req.body;
    FacultyModel(faculty).save()
        .then((data) => {
            console.log("Saved successfully...");
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send({ msg: "Something went wrong" });
        })

};

module.exports.updateFaculty = (req, res) => {
    FacultyModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(() =>
            res.send("Updated successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};

module.exports.deleteFaculty = (req, res) => {
    const { id } = req.params;
    FacultyModel.findByIdAndDelete(id)
        .then(() =>
            res.send("Deleted successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};