const ElecModel = require('../models/Elec')

module.exports.createElec = async (req, res)=>{
    try{
        const doc = new ElecModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const elec = await doc.save()
        res.json(elec)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllElec = async (req, res)=>{
    try{
        const elec = await ElecModel.find()
        res.json(elec)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneElec = async (req, res)=>{
    try{
        const elecId = req.params.id
       const elec = await ElecModel.findOne({
        _id: elecId
        })
        res.json(elec)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneElec = async (req, res)=>{
    try{
        const elecId = req.params.id
        await ElecModel.deleteOne({
            _id: elecId
        })
        res.json({
            message: "Success"
        })
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Возникла ошибка'
        })
    }
}
module.exports.updateOneElec = async (req, res)=>{
    try{
        const elecId = req.params.id
        await ElecModel.updateOne({
            _id: elecId
        }, {
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications,
        })
        res.json({
            message: "Success"
        })
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Возникла ошибка'
        })
    }
}