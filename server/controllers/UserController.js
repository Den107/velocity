const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
    try {

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt) //шифруем пароль

        const doc = new UserModel({
            email: req.body.email,
            password: passwordHash,
            login: req.body.login
        })

        const user = await doc.save()

        const token = jwt.sign({
            _id: user._id
        }, 'secretKey', {
            expiresIn: '30d'
        })

        res.json({
            ...user._doc,
            token
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
}
module.exports.login = async (req, res) => {
    try {
        const user = await UserModel.findOne({login: req.body.login})

        if (!user) {
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password) //сравниваем пароли у найденного пользователя и тот что пользователь ввел

        if (!isValidPass) {
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, 'secretKey', {
            expiresIn: '30d'
        })

        res.json({
            ...user._doc,
            token
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось авторизоваться'
        })
    }
}
module.exports.getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)
        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }

        res.json(user)
    } catch (e) {
        res.status(500).json({
            message: 'Нет доступа'
        })
    }
}