const router = require('express').Router();
const { required } = require('joi');
const {create} = require('../controllers/user');
const { schema } = require('../schemas/user');
const {accountExists} = required ("../middlewares/accountExistsSignUp.js")


router.post('/', create, validator(schema), accountExists)

module.exports = router;
