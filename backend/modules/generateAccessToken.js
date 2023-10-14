const base = "https://api-m.sandbox.paypal.com";

const handleResponse = require('./handleResponse')

const PAYPAL_CLIENT_ID = 'AW2PGeRo8c_mWjU1PxkMAKmfS1NIryET2Jymx31-piVRQPjE7cYoLbA9qKziseu5AUQJGQTabM0DxOk2'
const PAYPAL_CLIENT_SECRET = 'EL9W1Ekl727iJporReJP8Y-OJil1oorvEHYGDneCF6yGdynIOhFi2ljuTFPyncsKze30T0E4XzGL1dqe'

const generateAccessToken = async () => {
    try {
      if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        throw new Error("MISSING_API_CREDENTIALS");
      }
      const auth = Buffer.from(
        PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
      ).toString("base64");
      const response = await fetch(`${base}/v1/oauth2/token`, {
        method: "POST",
        body: "grant_type=client_credentials",
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
      
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Failed to generate Access Token:", error);
    }
  };

module.exports = generateAccessToken