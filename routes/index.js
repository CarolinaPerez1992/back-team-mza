const router = require('express').Router()
const user = require('./user')
const city = require('./city')
const itinerary = require('./itinerary')

router.use('/api/users', user)
router.use('/api/cities', city)
router.use('/api/itineraries', itinerary)
module.exports = router;

