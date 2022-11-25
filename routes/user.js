const router = require('express').Router();
const schema  = require('../schemas/user');
const validator = require('../middlewares/validator')
const {register, check} = require('../controllers/user');
const {accountExists} = require ("../middlewares/accountExistsSignUp")


router.post('/signUp',validator(schema)  , accountExists, register)
router.get("/verify/:code" , check)
module.exports = router;