const mongoose = require('mongoose')

const ElecSchema = new mongoose.Schema({
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

const ElecModel = mongoose.model('Elec', ElecSchema)

module.exports = ElecModel