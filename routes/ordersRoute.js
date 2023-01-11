const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteOrder
} = require("../controllers/orders-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteOrder)

module.exports = router;