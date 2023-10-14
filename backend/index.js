const express = require('express')
const cors = require('cors')
const app = express()
const createOrder = require('./modules/createOrder')
const capturePayment = require('./modules/capturePayment')

//config JSON response
app.use(express.json())

//Solving the cors problem
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//Public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/UserRoutes')
const ItemRoutes = require('./routes/ItemRoutes')
app.use('/users', UserRoutes)
app.use('/items', ItemRoutes)



// paypal

app.post("/create-paypal-order", async (req, res) => {
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const { product } = req.body;
        const { jsonResponse, httpStatusCode } = await createOrder(product);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});

app.post("/capture-paypal-order", async (req, res) => {

    try {
        const { orderID } = req.body;
        const { jsonResponse, httpStatusCode } = await capturePayment(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});



app.listen(4000)


