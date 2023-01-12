const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteReview
} = require("../controllers/review-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteReview)

module.exports = router; 