//creating the functions for the UserRoutes

const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { cpf } = require('cpf-cnpj-validator');
const { cnpj } = require('cpf-cnpj-validator');

//helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

function telefone_validation(telefone) {

    if (!(telefone.length >= 10 && telefone.length <= 11)) return false

    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false

    for (var n = 0; n < 10; n++) {
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false
    }
    
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99]

    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false

    return true;
}


module.exports = class UserController {


    //user register
    static async register(req, res) {

        const user_cnpj = req.body.cnpj
        const business_name = req.body.business_name
        const cnae = req.body.cnae
        const name = req.body.name
        const user_cpf = req.body.cpf
        const email = req.body.email
        const phone = req.body.phone
        const address = req.body.address
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword

        //validations



        if (!user_cnpj) {
            res.status(422).json({ message: 'Faltando CNPJ' })
            return
        }

        if (!cnpj.isValid(user_cnpj)) {
            res.status(422).json({ message: 'CNPJ Inválido' })
            return
        }

        if (!business_name) {
            res.status(422).json({ message: 'Faltando Razão Social' })
            return
        }

        if (!cnae) {
            res.status(422).json({ message: 'Faltando CNAE' })
            return
        }
        if (!name) {
            res.status(422).json({ message: 'Faltando nome' })
            return
        }

        if (!user_cpf) {
            res.status(422).json({ message: 'Faltando CPF' })
            return
        }

        if (!cpf.isValid(user_cpf)) {
            res.status(422).json({ message: 'CPF Inválido' })
            return
        }

        if (!phone) {
            res.status(422).json({ message: 'Faltando Telefone' })
            return
        }

        if (!telefone_validation(phone)) {
            res.status(422).json({ message: 'Telefone inválido' })
            return
        }

        if (!address) {
            res.status(422).json({ message: 'Faltando Endereço' })
            return
        }

        if (!email) {
            res.status(422).json({ message: 'Faltando E-mail' })
            return
        }

        if (!password) {
            res.status(422).json({ message: 'Faltando senha' })
            return
        }

        if (!confirmpassword) {
            res.status(422).json({ message: 'Faltando confirmação de senha' })
            return
        }

        if (password !== confirmpassword) {
            res.status(422).json({ message: 'As senhas devem ser identicas' })
            return
        }

        //chech if user exists
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            res.status(422).json({ message: 'Já existe um usuario com esse e-mail' })
            return
        }

        //create an encrypted password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        //create a user
        const user = new User({
            user_cnpj,
            business_name,
            cnae,
            user_cpf,
            name,
            email,
            phone,
            address,
            password: passwordHash,
        })

        try {

            const newUser = await user.save()

            await createUserToken(newUser, req, res)

        } catch (err) {
            res.status(500).json({ message: err })
        }

    }
    /////////////////////////////////////////////
    //user login

    static async login(req, res) {
        const { email, password } = req.body

        if (!email) {
            res.status(422).json({ message: 'Faltando E-mail' })
            return
        }

        if (!password) {
            res.status(422).json({ message: 'Faltando senha' })
            return
        }

        // check if user exists
        const user = await User.findOne({ email: email })

        if (!user) {
            res.status(422).json({ message: 'Não existe usuario com esse email' })
            return

        }

        //check if password matches with email
        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            res.status(422).json({ message: 'Senha inválida' })
            return
        }

        //if its all cool
        await createUserToken(user, req, res)

    }

    /////////////////////////////////////// 
    //check user

    static async checkUser(req, res) {
        let currentUser


        if (req.headers.authorization) {
            const token = getToken(req)
            const decoded = jwt.verify(token, 'nossosecret')

            currentUser = await User.findById(decoded.id)
            currentUser.password = undefined

        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

    /////////////////////////////////////
    //get user by id

    static async getUserById(req, res) {
        const id = req.params.id
        if (!id.match(/^[0-9a-fA-F]{24}$/)) { // due to a mongo error with ObjectId had to put this line inside the if
            res.status(422).json({ "message": " Usuario não encontrado" })
            return
        }
        const user = await User.findById(id).select('-password')
        res.status(200).json({ user });

    }

    ////////////////////////////////////
    //edit user

    static async editUser(req, res) {
        const token = getToken(req)

        const user = await getUserByToken(token)

        const cnpj = req.body.cnpj
        const business_name = req.body.business_name
        const cnae = req.body.cnae
        const name = req.body.name
        const cpf = req.body.cpf
        const email = req.body.email
        const phone = req.body.phone
        const address = req.body.address
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword

        let image = ''

        if (req.file) {
            user.image = req.file.filename
        }


        // validations
        if (!name) {
            res.status(422).json({ message: 'Faltando nome' })
            return
        }

        user.name = name

        if (!email) {
            res.status(422).json({ message: 'Faltando email' })
            return
        }

        // check if user exists
        const userExists = await User.findOne({ email: email })

        if (user.email !== email && userExists) {
            res.status(422).json({ message: 'use outro email' })
            return
        }

        user.email = email

        if (image) {
            const imageName = req.file.filename
            user.image = imageName
        }

        if (!phone) {
            res.status(422).json({ message: 'Faltando telefone' })
            return
        }

        user.phone = phone

        if (!address) {
            res.status(422).json({ message: 'Faltando Endereço' })
            return
        }

        user.address = address

        // check if password match
        if (password != confirmpassword) {
            res.status(422).json({ error: 'As senhas são diferentes' })
            return

            // change password
        } else if (password == confirmpassword && password != null) {
            // creating password
            const salt = await bcrypt.genSalt(12)
            const reqPassword = req.body.password

            const passwordHash = await bcrypt.hash(reqPassword, salt)

            user.password = passwordHash

        }

        try {
            // returns updated data
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $set: user },
                { new: true },
            )
            res.status(200).json({
                message: 'Usuario atualizado',
                data: updatedUser,
            })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }


}



