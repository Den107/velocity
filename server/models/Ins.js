const mongoose = require('mongoose')

const InsSchema = new mongoose.Schema({
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

const InsModel = mongoose.model('Ins', InsSchema)

module.exports = InsModel