const SparesModel = require('../models/Spares')

module.exports.createSpares = async (req, res)=>{
    try{
        const doc = new SparesModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const spares = await doc.save()
        res.json(spares)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllSpares = async (req, res)=>{
    try{
        const spares = await SparesModel.find()
        res.json(spares)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneSpares = async (req, res)=>{
    try{
        const sparesId = req.params.id
       const spares = await SparesModel.findOne({
        _id: sparesId
        })
        res.json(spares)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneSpares = async (req, res)=>{
    try{
        const sparesId = req.params.id
        await SparesModel.deleteOne({
            _id: sparesId
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
module.exports.updateOneSpares = async (req, res)=>{
    try{
        const sparesId = req.params.id
        await SparesModel.updateOne({
            _id: sparesId
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