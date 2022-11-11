const router = require('express').Router()
const user = require('./user')
const city = require('./city')

router.use('/api/users', user)
router.use('/api/cities', city)
module.exports = router;
