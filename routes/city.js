const router = require('express').Router();
const {create} = require('../controllers/city')

router.post('/', create)

module.exports = router;