const joi = require('joi')

const schema = joi.object({
    name: joi.string()
    .required()
    .min(3)
    .max(50)
    .messages({
        'any.required': 'Name is required',
        'string.empy': 'Name is required',
        'string.min': 'A minimun be at most 30 charecters requested',
        'string.max': 'A maximum be at most 30 charecters requested',
        }),
    lastName: joi.string()
    .required()
    .min(5)
    .max(7)
    .messages({
        'any.required': 'Name is required',
        'string.empy': 'Name is required',
        'string.min': 'A minimun be at most 30 charecters requested',
        'string.max': 'A maximum be at most 30 charecters requested',
    }),
    role: joi.string().valid("user", "admin"),
    photo: joi.string().required().uri().messages({
        'any.required': 'Image is required',
        'string.empy': 'Image is required',
        'string.uri': 'A valid url ir requested',
    }),
    age: joi.number().required().min(18).messages({
        'any.required': 'Age is required',
        'number.empy': 'Age is required',
        'number.min': 'You must be over 18 years old',
    }),
    email: joi.string().required().email({minDomainSegments}).messeges({
        'any.required': 'Email is required',
        'string.empy': 'Email is required',
        'string.email': 'Must be a valid email',
    }),
    password: joi.string().required().messages({
        'any.required': 'Password is required',
        'string.empy': 'Password is required',
})

})
module.exports = schema