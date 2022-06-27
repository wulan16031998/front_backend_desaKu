const validator = require('validator')

exports.registerValidator = async (req, res, next) => {
    try {
        const {nikk, nama, alamatKtp, pekerjaan, jenisKelamin, contact, email, password} = req.body

        if (nikk && nama && alamatKtp && pekerjaan && jenisKelamin &&contact && email && password === '') {
            return res.status(400).send({
                message : 'field should not be empty'
            })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).send ({
                message : 'invalid email address'
            })
        }

        if (!validator.isStrongPassword(password)){
            return res.status(400).send ({
                message: 'password not strong, password must be 8 character and include lowercase, uppercase, symbol and number'
            })
        }

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