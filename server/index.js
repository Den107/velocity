const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const multer = require('multer')

const {registerValidator, loginValidator} = require('./validations/auth')
const {veloCreateValidator, veloUpdateValidator} = require('./validations/velo')
const handleValidationErrors = require('./utils/handleValidationErrors')

const checkAuth = require('./utils/checkAuth')
const {register, login, getMe} = require('./controllers/UserController')
const {createVelo, getAllVelos, getOneVelos, deleteOneVelo, updateOneVelo} = require('./controllers/VelosController')

/**
 * подключение к БД
 * @returns {Promise<void>}
 */
async function connectToDB() {
    await mongoose.connect('mongodb://localhost:27017/velocity')
}
connectToDB()
    .then(() => console.log('Connect to db'))
    .catch((err) => console.log(err))


const app = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'server/uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage})

app.use(cors()) //чтобы не было ошибки cors
app.use(express.json()) //чтобы экспресс мог понимать json в запросе
app.use('/uploads', express.static('server/uploads'))//отправляем гет запрос сразу в папку uploads

app.get('/', (req, res) => {
    res.send('Lalala')
})

// app.get('/velos', (req, res) => {
//
//     res.sendFile(__dirname + '/velos.json')
// })

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.post('/auth/login', loginValidator, handleValidationErrors, login)
app.post('/auth/register', registerValidator, handleValidationErrors, register) //прогоняем сначала запрос через валидатор
app.get('/auth/me', checkAuth, getMe) //прогоняем запрос через мидлвар

app.get('/velos', getAllVelos)// получить все велосипеды
app.get('/velos/:id', getOneVelos) // получить один велосипед
app.post('/velos', veloCreateValidator, createVelo) //добавляем новый велосипед
app.delete('/velos/:id', deleteOneVelo) // удалить один велосипед
app.patch('/velos/:id',veloUpdateValidator, updateOneVelo) // обновить один велосипед

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server Ok')
})