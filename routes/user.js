const router = require('express').Router();
const schema  = require('../schemas/user');
const validator = require('../middlewares/validator')
const {register, check, logIn, loginWithToken} = require('../controllers/user');
const {accountExists} = require ("../middlewares/accountExistsSignUp")
const accountExistsSignIn = require ("../middlewares/accountExistsSignIn")
const schemaSignIn = require('../schemas/signin')
const {accountHasBeenVerified} = require('../middlewares/accountHasBeenVerified')
const passport = require('../config/passport')
const mustSignIn = require('../middlewares/mustSignIn')
router.post('/signUp',validator(schema)  , accountExists, register)
router.get("/verify/:code" , check)

router.post('/signin', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, logIn)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, loginWithToken )

module.exports = router;
