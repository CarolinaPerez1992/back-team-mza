const router = require('express').Router();
const {create, readItineraries, destroy} = require('../controllers/itinerary')

router.get('/', readItineraries)
router.post('/', create)
router.delete('/:id', destroy)
module.exports = router;