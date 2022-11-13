const router = require("express").Router();
const { create, readShows } = require("../controllers/show");

router.post("/", create);
router.get("/", readShows);
module.exports = router;
