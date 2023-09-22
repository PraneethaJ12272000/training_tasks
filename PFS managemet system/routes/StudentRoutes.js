const {Router} = require('express');
const {
    getStudents, 
    saveStudents, 
    updateStudents, 
    deleteStudents,
    findParent
} =require("../controllers/StudentControllers");

const router =Router();

router.get("/get", getStudents);
router.post("/save", saveStudents);
router.put("/update/:id", updateStudents);
router.delete("/delete/:id", deleteStudents);
router.get("/get/aggregate/:id", findParent);


module.exports = router;