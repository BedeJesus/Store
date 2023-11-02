import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function PayPalPayment() {

    const serverUrl = "https://backend-f5y22qhtg-bedejesus.vercel.app/pay-pal"

    const [token] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()

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
                Authorization: `Bearer ${JSON.parse(token)}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => {

                navigate('/subscription/success')
                response.json()
            }).catch((err) => {
                window.alert('Pagamento não aprovado, tente novamente')
            });

    };

    return (

        <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    )
}