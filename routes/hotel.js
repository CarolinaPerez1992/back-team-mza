const router = require("express").Router();
const { create } = require("../controllers/hotel"); //sacar read y onlyone ante depos post

router.post("/", create);

module.exports = router;
