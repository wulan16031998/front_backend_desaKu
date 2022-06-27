require('dotenv').config()

const jwt = require('jsonwebtoken')
const {warga} = require('../models')

exports.verifyToken = async (req, res, next) => {
    try {
        const jwtToken = req.headers['authorization']
        if(!jwtToken) {
            return res.status(403).send({
                message: 'no JWT token provided'
            })
        }

        let verify = jwt.verify(jwtToken.split(" ")[1], process.env.JWT_KEY)
        if (!verify) {
            return res.status(403).send ({
                message: 'failed to authenticate JWT TOKEN'
            })
        }

        req.warga = verify
        next()
    } catch (error) {
        res.status(500).send({
            code : 500,
            status: false,
            message : error.message,
            data:null
        })
        
    }
}

exports.verifyAdmin = async (req, res, next) => {
    try {
        let isAdmin = await warga.findOne({
            where:{id: req.warga.id}
        })
        

        if(isAdmin.dataValues.roles !== "admin") {
            return res.status(403).send ({
                message: 'forbidden, you are not admin'
            })
        }

        next()
    } catch (error) {
        res.status(500).send ({
            code : 500,
            status: false,
            message: error.message,
            data: null 
    })
}
}