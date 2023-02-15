import React from "react";
import { SignIn } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'

import { Context } from '../../../context/UserContext'

import { Container, Data, Header, Input, Label, Footer } from './styles'

export default function Login() {

    const [user, setUser] = useState({})
    const { login } = useContext(Context)

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })


    }

    function handleSubmit(e) {
        e.preventDefault()
        login(user)

    }


    return (
        <Container>

            <Header>

                <h1>{<SignIn size={30} />}  Faça seu Login</h1>
                <h2>Entre com suas informações de login</h2>

            </Header>

            <form onSubmit={handleSubmit}>

                <Data>
                    <Label for="email">E-mail</Label>
                    <Input type="email" name="email" placeholder="Digite seu e-mail"  onChange={handleChange} />

                    <br />

                    <Label for="senha" >Senha</Label>
                    <Input type="password" name="password" placeholder="Digite sua senha" onChange={handleChange} />
                    <br />

                </Data>

                <Footer>

                    <button type="submit">Entrar</button>
                    <h6>Não tem uma conta? <Link to='/register'>Registre-se</Link></h6>

                </Footer>

            </form>

        </Container>


    )

}
















