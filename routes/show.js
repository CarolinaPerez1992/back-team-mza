const router = require("express").Router();
const { create, readShows, update } = require("../controllers/show");

router.post("/", create);
router.get("/", readShows);
router.patch("/:id", update);
module.exports = router;
