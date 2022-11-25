const router = require("express").Router();
const schema = require("../schemas/cities");
const validator = require("../middlewares/validator");
const {
  create,
  read,
  readOnlyOne,
  update,
  destroy,
} = require("../controllers/city");

router.post("/", validator(schema), create);
router.get("/", read);
router.get("/:id", readOnlyOne);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
