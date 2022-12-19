const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if (token) {
        try {
            const decoded = jwt.verify(token, 'secretKey')
            req.userId = decoded._id
            next()
        } catch (e) {
            return res.status(403).json({
                message: 'Нет доступа'
            })
        }
    } else {
        return res.status(403).json({
            message: 'Нет доступа'
        })
    }
} //мидлвар для получения токена, если функция next не выполняется, запрос дальше не идет