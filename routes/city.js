const router = require('express').Router();
const {create, read, readOnlyOne} = require('../controllers/city')


router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)

module.exports = router;