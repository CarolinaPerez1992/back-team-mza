const router = require('express').Router();
const {create} = require('../controllers/itinerary')


router.post('/', create)

module.exports = router;