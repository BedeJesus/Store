const jwt = require('jsonwebtoken')

const createUserToken = async(user,req,res) =>{

    //create token
    const token =jwt.sign({
        name: user.name,
        id: user._id,

    },"nossosecret") // here its used to place a complex string

    //return token
    res.status(200).json({
        message:"You are authenticated!",
        token:token,
        userId:user._id
    })


}

module.exports = createUserToken
















