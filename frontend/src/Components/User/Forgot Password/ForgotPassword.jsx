import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Data, Header, Input, Label, Footer, Button, Box } from './../../../styles/form'
import { SignIn } from 'phosphor-react'
import api from "../../../utils/api"
import useFlashMessage from "../../../hooks/useFlashMessage"


export default function ForgotPassword() {

    const { setFlashMessage } = useFlashMessage()

    const [token, setToken] = useState(true)
    const [tokenSent, setTokenSent] = useState(false)
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function sendToken() {

        let msgType = 'success'

        const data = await api.post('/users/forgot_password/', email)
            .then((response) => {
                setTokenSent(true)
                return response.data

            })
            .catch((err) => {
                console.log(err)
                msgType = 'error'
                return err.response.data
            })

        setFlashMessage(data.message, msgType)
    }

    async function resetPassword() {

        let msgType = 'success'

        const data = await api.post('/users/reset_password/', { token, password, email })
            .then((response) => {
                navigate('/login')
                return response.data
            })
            .catch((err) => {
                console.log(err)
                msgType = 'error'
                return err.response.data
            })

        setFlashMessage(data.message, msgType)
    }


    return (

        <Container>

            <Box>

                <Header>
                    <h1>{<SignIn size={30} />}Siga os passos</h1>
                    <h2>Digite seu email para receber o token</h2>
                </Header>

                <div>

                    <Data>
                        <Label for="email">E-mail</Label>
                        <Input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail({ ...email, [e.target.name]: e.target.value })} />
                        <br />
                    </Data>

                    <Footer>
                        <Button onClick={sendToken}>Gerar token</Button>
                    </Footer>

                    {tokenSent &&

                        <>

                            <Data>

                                <Label for="token" >Token</Label>
                                <Input type="token" name="token" placeholder="Digite seu token" onChange={(e) => setToken({ ...token, [e.target.name]: e.target.value })} />
                                <br />

                                <Label for="password">Nova senha</Label>
                                <Input type="password" name="password" placeholder="Digite sua nova senha" onChange={(e) => setPassword({ ...password, [e.target.name]: e.target.value })} />
                                <br />

                            </Data>


                            <Footer>
                                <Button onClick={resetPassword}>Mude sua senha</Button>
                            </Footer>
                        </>

                    }

                </div>

            </Box>

        </Container>

    )

}