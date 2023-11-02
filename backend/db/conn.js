const mongoose = require('mongoose')

require('dotenv').config({ path: '.env' });
//conecting to the db 'store'
async function main() {

    await mongoose.connect(process.env.MONGODB_CONNECT_URL)
    console.log('Conectou ao banco!')
}

main().catch((err) => console.log(err))

module.exports = mongoose



