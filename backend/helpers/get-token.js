const getToken = (req) =>{

    console.log(req.headers)
    const authHeader = req.headers.authorization


    const token = authHeader.split(" ")[1]
    console.log(token)

    return token

}

module.exports = getToken

