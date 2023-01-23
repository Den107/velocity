const InsModel = require('../models/Ins')

module.exports.createIns = async (req, res)=>{
    try{
        const doc = new InsModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const ins = await doc.save()
        res.json(ins)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllIns = async (req, res)=>{
    try{
        const ins = await InsModel.find()
        res.json(ins)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneIns = async (req, res)=>{
    try{
        const insId = req.params.id
       const ins = await InsModel.findOne({
        _id: insId
        })
        res.json(ins)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneIns = async (req, res)=>{
    try{
        const insId = req.params.id
        await InsModel.deleteOne({
            _id: insId
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
module.exports.updateOneIns = async (req, res)=>{
    try{
        const insId = req.params.id
        await InsModel.updateOne({
            _id: insId
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