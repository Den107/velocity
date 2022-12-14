const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors())
app.get('/velos', (req, res)=>{

    res.sendFile(__dirname + '/velos.json')
    // res.send(__dirname)
})

app.listen(4444, (err)=>{
    if(err){
        return console.log(err)
    }

    console.log('Server Ok')
})