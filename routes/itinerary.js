const router = require('express').Router();
const {create, readItineraries} = require('../controllers/itinerary')


router.post('/', create)
router.get('/', readItineraries)
module.exports = router;