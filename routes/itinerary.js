const router = require('express').Router();
const {create, readItineraries} = require('../controllers/itinerary')

router.get('/', readItineraries)
router.post('/', create)

module.exports = router;