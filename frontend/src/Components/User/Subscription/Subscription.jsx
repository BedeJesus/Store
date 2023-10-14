

import { Box, Container } from './styles'

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayment from './PayPalPayment';


export default function Subscription() {

    const initialOptions = {
        clientId: "AW2PGeRo8c_mWjU1PxkMAKmfS1NIryET2Jymx31-piVRQPjE7cYoLbA9qKziseu5AUQJGQTabM0DxOk2",
        currency: "BRL",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>

            <Container>

                <Box>
                    Faca a sua inscricao para poder disponibilizar itens para locacao


                    <PayPalPayment/>


                </Box>

            </Container>

        </PayPalScriptProvider>





    )

}