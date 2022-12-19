const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const {registerValidator} = require('./validations/auth')

const checkAuth = require('./utils/checkAuth')
const {register, login, getMe} = require('./controllers/UserController')


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

app.post('/auth/login', login)
app.post('/auth/register', registerValidator, register) //прогоняем сначала запрос через валидатор
app.get('/auth/me', checkAuth, getMe) //прогоняем запрос через мидлвар

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server Ok')
})