const router = require("express").Router();
const { create, read, readOnlyOne, update } = require("../controllers/hotel"); //sacar read y onlyone ante depos post

router.post("/", create); //post usamos en la primera
router.get("/", read); //post usamos en la segunda
router.get("/:id", readOnlyOne); //tercera/agregar en linea 2
router.patch("/:id", update);

module.exports = router;
