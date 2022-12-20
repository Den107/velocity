const VelosModel = require('../models/Velos')

module.exports.createVelo = async (req, res)=>{
    try{
        const doc = new VelosModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const velo = await doc.save()
        res.json(velo)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllVelos = async (req, res)=>{
    try{
        const velos = await VelosModel.find()
        res.json(velos)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneVelos = async (req, res)=>{
    try{
        const velosId = req.params.id
       const velo = await VelosModel.findOne({
        _id: velosId
        })
        res.json(velo)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneVelo = async (req, res)=>{
    try{
        const velosId = req.params.id
        await VelosModel.deleteOne({
            _id: velosId
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
module.exports.updateOneVelo = async (req, res)=>{
    try{
        const velosId = req.params.id
        await VelosModel.updateOne({
            _id: velosId
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