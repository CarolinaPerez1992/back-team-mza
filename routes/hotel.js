const router = require("express").Router();
const { create, read } = require("../controllers/hotel"); //sacar read y onlyone ante depos post

router.post("/", create); //post usamos en la primera
router.get("/", read); //post usamos en la segunda
module.exports = router;
