import { Box, Container, Buttons, Error } from './styles'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from '../Pay Pal Button/PayPalPayment';


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

                    <h1>Faca a sua inscrição</h1>

                    <p>Parar poder disponibilizar seus itens para locação
                        faça a sua inscrição por apenas 59,99 mensais!</p>

                    <p>Números indefinidos de itens disponiveis para locação com apenas uma assinatura. </p>

                    <p>Clique no botão abaixo para realizar o pagamento! </p>

                    <Buttons>
                        <PayPalPayment />
                    </Buttons>

                    <Error>
                        <p>Se ocorrer algum problema com o pagamento entre em contato conosco: </p>
                        <p>atendimento.customerconn@gmail.com </p>
                    </Error>


                </Box>

            </Container>


        </PayPalScriptProvider>





    )

}