let router = require('express').Router();
let { createReaction, updateReaction, read } = require('../controllers/reaction');
const validator = require('../middlewares/validator');
const schema = require('../schemas/reaction');
const passport = require('passport');


router.get('/', read);
router.post('/', validator(schema), createReaction);
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction);

module.exports = router;