const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteLawyer
} = require("../controllers/lawyer-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteLawyer)

module.exports = router;