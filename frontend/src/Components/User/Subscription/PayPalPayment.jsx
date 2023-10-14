import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalPayment() {

    const serverUrl = "http://localhost:4000"

    const createOrder = (data) => {
        // Order is created on the server and the order id is returned
        return fetch(`${serverUrl}/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                product: {
                    description: "Assinatura Custumer",
                    cost: "88.90"
                }
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);

    };
    const onApprove = (data) => {
        // Order is captured on the server and the response is returned to the browser

        return fetch(`${serverUrl}/capture-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => {

                // window.alert('nem acredito q deu certo')
                
                response.json()
            });
    };

    return (

        <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    )
}