const ParentModel = require("../models/Parent");

module.exports.getParents = async (req, res) => {
    const parents = await ParentModel.find();
    res.send(parents);
};

module.exports.saveParents = (req, res) => {
    const student = req.body;
    ParentModel(student).save()
        .then((data) => {
            console.log("Saved successfully...");
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send({ msg: "Something went wrong" });
        })

};

module.exports.updateParents = (req, res) => {
    ParentModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(() =>
            res.send("Updated successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};

module.exports.deleteParents = (req, res) => {
    const { id } = req.params;
    ParentModel.findByIdAndDelete(id)
        .then(() =>
            res.send("Deleted successfully")
        )
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        })

};