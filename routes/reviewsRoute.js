const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteReview
} = require("../controllers/review-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/create", create);
router.put("/update", update);
router.delete("/delete", deleteReview)

module.exports = router;