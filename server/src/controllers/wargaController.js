const {warga} = require('../models')

exports.getDetailWarga = async (req, res) => {
    try {
        let getWarga = await warga.findOne({
            where: {id: req.warga.id}
        })

        return res.status(200).send({
            message: 'retrieve success',
            data : getWarga.dataValues
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            status:false,
            message: error.message,
            data:null
        })
    }
}

exports.getAllWarga = async (req, res) => {
    try {
        let getWarga = await warga.findAll()

        return res.status(200).send ({
            message:'retrieve success',
            data : getWarga
        })
    } catch (error) {
        res.status(500).send({
            code : 500,
            status: false,
            message: error.message,
            data: null
        })
    }
}