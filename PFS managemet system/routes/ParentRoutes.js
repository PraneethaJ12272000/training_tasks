const {Router} = require('express');
const {
    getParents, 
    saveParents, 
    updateParents, 
    deleteParents
} =require("../controllers/ParentControllers");

const router =Router();

router.get("/get", getParents);
router.post("/save", saveParents);
router.put("/update/:id", updateParents);
router.delete("/delete/:id", deleteParents);


module.exports = router;