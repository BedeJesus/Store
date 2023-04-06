const jwt = require('jsonwebtoken')
const getToken = require('./get-token')

//middleware to validade a token
const checkToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Acesso negado, sem header de autorização' })

    }

    const token = getToken(req)

    if (!token) {
        return res.status(401).json({ message: 'Access Deniedeee' })
    }

    try{
        const verified = jwt.verify(token,'nossosecret')
        req.user = verified
        next()

    }catch(err){
        return res.status(400).json({ message: 'Token inválido' })


    }

}

module.exports = checkToken










