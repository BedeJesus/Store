const mongoose = require('mongoose')


//conecting to the db 'store'
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/store')
    console.log('Conectou ao banco!')
}

main().catch((err) => console.log(err))

module.exports = mongoose



