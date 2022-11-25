const router = require("express").Router();
const {
  create,
  read,
  readOnlyOne,
  update,
  destroy,
} = require("../controllers/hotel"); //sacar read y onlyone ante depos post
const validator = require("../middlewares/validator");
const schema = require("../schemas/hotels");//schemas

router.post("/", validator(schema), create);
router.get("/", read); //post usamos en la segunda
router.get("/:id", readOnlyOne); //tercera/agregar en linea 2
router.patch("/:id", update); //update
router.delete("/:id", destroy);

module.exports = router;
