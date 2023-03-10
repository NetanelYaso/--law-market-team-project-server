const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "ayo whatsup" });
})

app.listen(port, () => {
    console.log(`server is up at port : ${port}`);
})