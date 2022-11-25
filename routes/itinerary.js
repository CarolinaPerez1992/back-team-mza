const router = require('express').Router();
const {create, readItineraries, update} = require('../controllers/itinerary')
router.get('/', readItineraries)
router.post('/', create)
router.put('/:id', update)

module.exports = router;