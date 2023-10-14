const router  = require("express").Router()

const PayPalController = require("../controllers/PayPalController")

//routes

router.post('/create-paypal-order',PayPalController.createPayPalOrder)
router.post('/capture-paypal-order',PayPalController.capturePayPalOrder)


module.exports = router


