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
const {getAllAcc, getOneAcc, createAcc, deleteOneAcc, updateOneAcc} = require("./controllers/AccController");
const {getAllElec, getOneElec, createElec, deleteOneElec, updateOneElec} = require("./controllers/ElecController");
const {
    getAllEquip,
    getOneEquip,
    createEquip,
    deleteOneEquip,
    updateOneEquip
} = require("./controllers/EquipController");
const {getAllIns, getOneIns, createIns, deleteOneIns, updateOneIns} = require("./controllers/InsController");
const {
    getAllSpares,
    getOneSpares,
    createSpares,
    deleteOneSpares,
    updateOneSpares
} = require("./controllers/SparesController");

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
app.patch('/velos/:id', veloUpdateValidator, updateOneVelo) // обновить один велосипед

app.get('/acc', getAllAcc)
app.get('/acc/:id', getOneAcc)
app.post('/acc', veloCreateValidator, createAcc)
app.delete('/acc/:id', deleteOneAcc)
app.patch('/acc/:id', veloUpdateValidator, updateOneAcc)

app.get('/elec', getAllElec)
app.get('/elec/:id', getOneElec)
app.post('/elec', veloCreateValidator, createElec)
app.delete('/elec/:id', deleteOneElec)
app.patch('/elec/:id', veloUpdateValidator, updateOneElec)

app.get('/equip', getAllEquip)
app.get('/equip/:id', getOneEquip)
app.post('/equip', veloCreateValidator, createEquip)
app.delete('/equip/:id', deleteOneEquip)
app.patch('/equip/:id', veloUpdateValidator, updateOneEquip)

app.get('/ins', getAllIns)
app.get('/ins/:id', getOneIns)
app.post('/ins', veloCreateValidator, createIns)
app.delete('/ins/:id', deleteOneIns)
app.patch('/ins/:id', veloUpdateValidator, updateOneIns)

app.get('/spares', getAllSpares)
app.get('/spares/:id', getOneSpares)
app.post('/spares', veloCreateValidator, createSpares)
app.delete('/spares/:id', deleteOneSpares)
app.patch('/spares/:id', veloUpdateValidator, updateOneSpares)

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server Ok')
})