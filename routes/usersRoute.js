const router = require("express").Router();
const {
    getAll,
    getById,
    logInOrSignUpFunc,
    update,
    deleteUser,
    register,
    logIn,
} = require("../controllers/user-ctrl");


router.get("/", getAll);
router.get("/byId/:id", getById);
router.post("/logIn__register", logInOrSignUpFunc);
router.post("/logIn", logIn);
router.post("/register", register);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser)

module.exports = router;
