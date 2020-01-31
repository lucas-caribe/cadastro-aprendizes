const Aprendiz = require('../models/Aprendiz')

module.exports = {
    async index(req, res){
        const aprendizes = await Aprendiz.find()

        return res.json(aprendizes)
    },
    
    async store(req, res){
        const { name, doc, phone, email } = req.body

        let aprendiz = await Aprendiz.findOne({ doc })

        if(!aprendiz){
            aprendiz = await Aprendiz.create({
                name,
                doc,
                phone,
                email
            }).catch(err => console.log(err))
        }

        return res.json(aprendiz)
    }
}