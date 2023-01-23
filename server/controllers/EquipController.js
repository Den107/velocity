const EquipModel = require('../models/Equip')

module.exports.createEquip = async (req, res)=>{
    try{
        const doc = new EquipModel({
            title: req.body.title,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            specifications: req.body.specifications
        })

        const equip = await doc.save()
        res.json(equip)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Не удалось добавить велосипед'
        })
    }
}
module.exports.getAllEquip = async (req, res)=>{
    try{
        const equip = await EquipModel.find()
        res.json(equip)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Произошла ошибка'
        })
    }
}
module.exports.getOneEquip = async (req, res)=>{
    try{
        const equipId = req.params.id
       const equip = await EquipModel.findOne({
        _id: equipId
        })
        res.json(equip)
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Товар не найден'
        })
    }
}
module.exports.deleteOneEquip = async (req, res)=>{
    try{
        const equipId = req.params.id
        await EquipModel.deleteOne({
            _id: equipId
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
module.exports.updateOneEquip = async (req, res)=>{
    try{
        const equipId = req.params.id
        await EquipModel.updateOne({
            _id: equipId
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