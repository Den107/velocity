const mongoose = require('mongoose')

const VelosSchema = new mongoose.Schema({
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

const VelosModel = mongoose.model('Velos', VelosSchema)

module.exports = VelosModel