const base = "https://api-m.sandbox.paypal.com";

const generateAccessToken = require('./generateAccessToken')

const createProduct = async () => {
    // use the product information passed from the front-end to calculate the purchase unit details
  
    const accessToken = await generateAccessToken();
    const url = `${base}/v1/catalogs/products`;


    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
            "name": "Assinatura Custumer Connection",
            "description": "Assinatura",
            "type": "SERVICE",
            "category": "SOFTWARE",
        }),
    });

    return response

};

module.exports = createProduct