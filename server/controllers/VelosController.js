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