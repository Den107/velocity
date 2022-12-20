const {body} = require('express-validator')

module.exports.veloCreateValidator = [
    body('title', 'Необходимо название товара').isLength({min: 5}).isString(),
    body('price', 'Необходимо ввести цену в правильном формате').isLength({min: 3}).isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
    body('specifications', 'Неверный формат характеристик').optional().isArray()
]

