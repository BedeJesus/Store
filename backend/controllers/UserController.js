//creating the functions for the UserRoutes

const zlib = require('zlib');


const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../modules/mailer')

const { cpf } = require('cpf-cnpj-validator');
const { cnpj } = require('cpf-cnpj-validator');

//helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

const telefone_validator = require('../helpers/telefone_validator')

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

        if (!telefone_validator(phone)) {
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
            cnpj: user_cnpj,
            business_name,
            cnae,
            cpf: user_cpf,
            name,
            email,
            phone,
            address,
            password: passwordHash,
            subscribed: false
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

        user.subscribed = user.subscribed

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

    static async forgotPassword(req, res) {
        const { email } = req.body;

        try {

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(422).json({ message: 'Usuario não encontrado' })
            }

            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date()
            now.setHours(now.getHours() + 1)

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now,
                }
            })

            mailer.sendMail({
                to: email,
                from: 'gabriel.jesilva@gmail.com',
                template: 'forgot_password',
                context: { token },
            }, (err) => {
                if (err) {
                    return res.status(400).json({ message: 'Não foi possivel enviar o email para mudar a senha' })
                }

                res.status(200).json({
                    message: 'Email enviado',
                    data: token,
                })
            })


        } catch (err) {
            res.status(400).json({ message: 'Erro no esqueci minha senha' })
        }

    }

    static async resetPassword(req, res) {

        const email = req.body.email.email
        const token = req.body.token.token
        const password = req.body.password.password

        try {

            const user = await User.findOne({ email })


            if (!user) {
                return res.status(400).send({ message: 'Usuario não encontrado' })
            }

            if (token !== user.passwordResetToken) {
                return res.status(400).send({ message: 'Token inválido' })
            }

            const now = new Date()
            if (now > user.passwordResetExpires) {
                return res.status(400).send({ message: 'Token expirado, gere um novo' })
            }

            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)
            user.password = passwordHash;

            await user.save()

            return res.status(200).json({ message: 'Senha atualziada' })

        } catch (err) {
            res.status(400).json({ message: err })
        }

    }

    static async teste(req, res) {

        const payload = '123456789'

        const data = {
            '1':payload.repeat(1000),
            '2':payload.repeat(1000),
            '3':payload.repeat(1000),
            '4':payload.repeat(1000),
            '5':payload.repeat(1000),
            '6':payload.repeat(1000),
            '7':payload.repeat(1000),
            '8':payload.repeat(1000)
        }

        const objString = JSON.stringify(data);

        // res.setHeader('Content-Type', 'application/json');
        // zlib.gzip(objString, (err, buffer) => {
        //     if (!err) {
        //       // buffer contém os dados comprimidos em formato gzip
        //       res.send(objString);
        //     } else {
        //       console.error('Erro na compressão gzip:', err);
        //     }
        //   });

           res.send(objString);

        

    }


}



