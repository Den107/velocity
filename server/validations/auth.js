const {body} = require('express-validator')

 module.exports.registerValidator = [
    body('password', 'Минимум пять символов').isLength({min: 5}),
    body('login', 'Минимум три символа').isLength({min: 3})
]

module.exports.loginValidator = [
    body('password', 'Минимум пять символов').isLength({min: 5}),
    body('login', 'Минимум три символа').isLength({min: 3})
]