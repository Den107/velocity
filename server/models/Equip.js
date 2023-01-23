const mongoose = require('mongoose')

const EquipSchema = new mongoose.Schema({
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

const EquipModel = mongoose.model('Equip', EquipSchema)

module.exports = EquipModel