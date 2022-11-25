const user = require("../models/User");
const { invalidCredentialsResponse } = require("../responses/auth");

async function accountExists(req, res, next) {
    const User = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = user
        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = { accountExists }
