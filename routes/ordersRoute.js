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
router.put("/update/byId/:id", update);
router.delete("/delete/byId/:id", deleteOrder)

module.exports = router;