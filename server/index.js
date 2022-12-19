const express = require('express')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const {registerValidator} = require('./validations/auth')
const {validationResult} = require('express-validator')
const UserModel = require('./models/User')


async function connectToDB() {
    await mongoose.connect('mongodb://localhost:27017/velocity')
}

connectToDB()
    .then(() => console.log('Connect to db'))
    .catch((err) => console.log(err))


const app = express()

app.use(cors()) //чтобы не было ошибки cors
app.use(express.json()) //чтобы экспресс мог понимать json в запросе

app.get('/', (req, res) => {
    res.send('Lalala')
})

app.get('/velos', (req, res) => {

    res.sendFile(__dirname + '/velos.json')
})

app.post('/auth/login', async (req, res) => {
    try{
        const user = await UserModel.findOne({login: req.body.login})

        if(!user) {
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password) //сравниваем пароли у найденного пользователя и тот что пользователь ввел

        if(!isValidPass){
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, 'secretKey',{
            expiresIn: '30d'
        })

        res.json({
            ...user._doc,
            token
        })

    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось авторизоваться'
        })
    }
})
app.post('/auth/register', registerValidator, async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

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
        }, 'secretKey',{
            expiresIn: '30d'
        })

        res.json({
            ...user._doc,
            token
        })
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
}) //прогоняем сначала запрос через валидатор


app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server Ok')
})