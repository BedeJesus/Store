const base = "https://api-m.sandbox.paypal.com";

const generateAccessToken = require('./generateAccessToken')
const handleResponse = require('./handleResponse')

const createOrder = async (product) => {
    // use the product information passed from the front-end to calculate the purchase unit details
    console.log(
      "shopping product information passed from the frontend createOrder() callback:",
      product,
    );
    
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "BRL",
            value: "89.99",
          },
        },
      ],
    };
    
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    
    return handleResponse(response);
  };

module.exports = createOrder