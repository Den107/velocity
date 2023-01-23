const mongoose = require('mongoose')

const SparesSchema = new mongoose.Schema({
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

const SparesModel = mongoose.model('Spares', SparesSchema)

module.exports = SparesModel