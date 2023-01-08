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
router.get("/byId", getById);
router.post("/logIn__rgister", logInOrSignUpFunc);
router.post("/logIn", logIn);
router.post("/register", register);
router.put("/update", update);
router.delete("/delete", deleteUser)

module.exports = router;
