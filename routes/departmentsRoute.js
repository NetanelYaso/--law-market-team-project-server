const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteDepartment
} = require("../controllers/department-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteDepartment)

module.exports = router;