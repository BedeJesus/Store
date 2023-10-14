const express = require('express')
const cors = require('cors')
const app = express()


//config JSON response
app.use(express.json())

//Solving the cors problem
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

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


