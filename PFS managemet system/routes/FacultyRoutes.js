const {Router} = require('express');
const {
    getFaculty, 
    saveFaculty, 
    updateFaculty, 
    deleteFaculty
} =require("../controllers/FacultyControllers");

const router =Router();

router.get("/get", getFaculty);
router.post("/save", saveFaculty);
router.put("/update/:id", updateFaculty);
router.delete("/delete/:id", deleteFaculty);


module.exports = router;