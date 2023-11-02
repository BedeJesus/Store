const createOrder = require('./../modules/createOrder')
const capturePayment = require('./../modules/capturePayment')
const createProduct = require('./../modules/createProduct')

//helpers
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class PayPalController {

    static async createPayPalOrder(req, res) {

        try {
            // use the cart information passed from the front-end to calculate the order amount detals
            const { product } = req.body;
            const { jsonResponse, httpStatusCode } = await createOrder(product);
            res.status(httpStatusCode).json(jsonResponse);
        } catch (error) {
            console.error("Failed to create order:", error);
            res.status(500).json({ error: "Failed to create order." });
        }
    }

    static async capturePayPalOrder(req, res) {

        try {
            const { orderID } = req.body;
            const { jsonResponse, httpStatusCode } = await capturePayment(orderID);

            const token = getToken(req)
            const user = await getUserByToken(token)
            user.subscribed = true;
            await user.save()

            res.status(httpStatusCode).json(jsonResponse);
        } catch (error) {
            console.error("Failed to create order:", error);
            res.status(500).json({ error: "Failed to capture order." });
        }

    }

}