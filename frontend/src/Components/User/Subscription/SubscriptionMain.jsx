import { Box, Container } from './styles'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from './Pay Pal Button/PayPalPayment';


export default function SubscriptionMain() {

    const initialOptions = {
        clientId: "AW2PGeRo8c_mWjU1PxkMAKmfS1NIryET2Jymx31-piVRQPjE7cYoLbA9qKziseu5AUQJGQTabM0DxOk2",
        currency: "BRL",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>

            <Container>

                <Box>

                    <h1>Faca a sua inscrição!</h1>

                    <p>Parar poder disponibilizar seus itens para locação
                        faça a sua inscrição por apenas 89,99 mensais!</p>
                        
                    <p>Faça o teste por 1 mês e depois comece a pagar</p>
                    <p>Números indefinidos de itens disponiveis para locação com apenas uma assinatura. </p>

                    <p>Clique no botão abaixo para realizar o pagamento! </p>

                    <PayPalPayment />


                </Box>

            </Container>

        </PayPalScriptProvider>





    )

}