const express = require('express')
const cors = require('cors')
const compression = require('compression');

const app = express()


app.use(compression());


//config JSON response
app.use(express.json())


//Solving the cors problem
app.use(cors())

//Public folder for images
app.use(express.static('public'))
//Routes
const UserRoutes = require('./routes/UserRoutes')
const ItemRoutes = require('./routes/ItemRoutes')
const PayPalRoutes = require('./routes/PayPalRoutes')

app.use('/users', UserRoutes)
app.use('/items', ItemRoutes)
app.use('/pay-pal',PayPalRoutes)

app.listen(4000)



