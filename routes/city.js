const router = require('express').Router();
const {create, read} = require('../controllers/city')


router.post('/', create)
router.get('/', read)

module.exports = router;