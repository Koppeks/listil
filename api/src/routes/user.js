const express = require("express");
const { getAll } = require("../controllers/userControllers.js");

const router = express.Router();

router.get("/getAll", getAll);

module.exports = router;
