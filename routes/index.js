const router = require("express").Router();
const user = require("./user");
const city = require("./city");
const itinerary = require("./itinerary");
const hotel = require("./hotel");
const show = require("./show");

router.use("/api/users", user);
router.use("/api/cities", city);
router.use("/api/itineraries", itinerary);
router.use("/api/hotels", hotel);
router.use("/api/shows", show);

module.exports = router;
