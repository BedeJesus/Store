import { Box, Container, Buttons, Error, Button } from './styles'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from '../Pay Pal Button/PayPalPayment';
import api from '../../../../utils/api';
import useFlashMessage from '../../../../hooks/useFlashMessage';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SubscriptionMain() {

    const initialOptions = {
        clientId: "AW2PGeRo8c_mWjU1PxkMAKmfS1NIryET2Jymx31-piVRQPjE7cYoLbA9qKziseu5AUQJGQTabM0DxOk2",
        currency: "BRL",
        intent: "capture",
    };

    const { setFlashMessage } = useFlashMessage()
    const [reqLoading, setReqLoading] = useState(false)
    const [token] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()

    async function allowItemRegister() {
        setReqLoading(true)
        let msgType = 'success'
        const data = await api.post(`users/allow_item_register`, {
            token
        }).then((response) => {
            navigate('/subscription/success')
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })
        setReqLoading(false)
        setFlashMessage(data.message, msgType)
    }


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
                        <p>Se ocorrer algum problema &nbsp;<Button onClick={allowItemRegister}>{!reqLoading ? "Clique aqui" : "Liberando acesso..."}</Button> &nbsp; </p>
                        <p>Ou mande um email para atendimento.customerconn@gmail.com </p>
                    </Error>

                </Box>

            </Container>


        </PayPalScriptProvider>


    )

}