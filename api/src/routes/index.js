const express = require("express");

// require de las rutas
const user = require("./user.js");

const router = express.Router();

//asignacion de rutas de los modelos
router.use("/user", user);

module.exports = router;
