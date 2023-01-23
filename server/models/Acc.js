const mongoose = require('mongoose')

const AccSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imageUrl: String,
    specifications:{
        type: Array,
        default:[]
    }
}, {
    timestamps: true
})

const AccModel = mongoose.model('Acc', AccSchema)

module.exports = AccModel