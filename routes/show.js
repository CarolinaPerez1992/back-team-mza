const router = require("express").Router();
const { create, readShows, update, destroy } = require("../controllers/show");

router.post("/", create);
router.get("/", readShows);
router.patch("/:id", update);
router.delete("/:id", destroy);
module.exports = router;
