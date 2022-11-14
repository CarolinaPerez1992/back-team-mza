const router = require('express').Router();
const {create, read, readOnlyOne, update, destroy} = require('../controllers/city')


router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;