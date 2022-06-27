const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {warga} = require('../models')

exports.register = async (req, res) => {
    try {
        const {nikk, nama, alamatKtp, pekerjaan, jenisKelamin, contact, email, password} = req.body
        const hashedPassword = bcrypt.hashSync(password, 8)

        let insertWarga = await warga.create({
            nikk: nikk,
            nama: nama,
            alamatKtp: alamatKtp,
            pekerjaan: pekerjaan,
            jenisKelamin: jenisKelamin,
            contact: contact,
            email: email,
            password: hashedPassword
        })

        return res.status(201).send({
            message: 'register success',
        })
    } catch  (error) {
        res.status(500).send({
            code : 500,
            status: false,
            message : error.message,
            data:null
        })
    }
}

exports.login = async (req, res) => {
    try {
        let getWarga = await warga.findOne({
            where: {nama: req.body.nama}
        })

        const isPasswordValid = bcrypt.compareSync(req.body.password, getWarga.dataValues.password)

        if(!isPasswordValid){
            return res.status(400).send({
                message: 'password invalid'
            })
        }

        const token = jwt.sign({
            id: getWarga.dataValues.id
        }, process.env.JWT_KEY, {expiresIn: 3600} )

        return res.status(200).send({
            message:'login successful',
            data: getWarga.dataValues.nama,
            token: token
        })
    } catch (error) {
        
    }
}