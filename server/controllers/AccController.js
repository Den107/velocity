const AccModel = require('../models/Acc')

module.exports.createAcc = async (req, res)=>{
    try{
        const doc = new AccModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const acc = await doc.save()
        res.json(acc)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllAcc = async (req, res)=>{
    try{
        const acc = await AccModel.find()
        res.json(acc)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneAcc = async (req, res)=>{
    try{
        const accId = req.params.id
       const acc = await AccModel.findOne({
        _id: accId
        })
        res.json(acc)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneAcc = async (req, res)=>{
    try{
        const accId = req.params.id
        await AccModel.deleteOne({
            _id: accId
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
module.exports.updateOneAcc = async (req, res)=>{
    try{
        const accId = req.params.id
        await AccModel.updateOne({
            _id: accId
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