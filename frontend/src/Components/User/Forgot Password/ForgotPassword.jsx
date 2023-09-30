import { useState } from 'react'
import { Container, Data, Header, Input, Label, Footer, Button, Box } from './../../../styles/form'
import { SignIn } from 'phosphor-react'



export default function ForgotPassword() {

    const [token, setToken] = useState(true)

    return (

        <Container>

            <Box>

                <Header>
                    <h1>{<SignIn size={30} />}Siga os passos</h1>
                    <h2>Digite seu email para receber o token</h2>
                </Header>

                <form>

                    <Data>
                        <Label for="email">E-mail</Label>
                        <Input type="email" name="email" placeholder="Digite seu e-mail" />
                        <br />

                        <Label for="token" >Token</Label>
                        <Input type="token" name="token" placeholder="Digite seu token" />
                        <br />
                    </Data>

                    {token &&

                        <>

                            <Data>
                                <Label for="password">Nova senha</Label>
                                <Input type="password" name="password" placeholder="Digite sua nova senha" />
                                <br />

                                <Label for="confirmPassword" >Confirme a nova senha</Label>
                                <Input type="confirmPassword" name="confirmPassword" placeholder="Confirme sua nova senha" />
                                <br />
                            </Data>


                            <Footer>
                                <Button type="submit">Entrar</Button>
                            </Footer>
                        </>

                    }

                </form>

            </Box>

        </Container>

    )

}