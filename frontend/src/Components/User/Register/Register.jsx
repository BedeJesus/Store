import React from "react";
import { SignIn } from 'phosphor-react'
import { useState } from "react";
import { useContext } from "react";
import { Context } from '../../../context/UserContext'

import { Container, Header, Input, Label, Button, Data } from './styles'

export default function Register() {


    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    //get user data
    function handleOnChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    function handleSubmit(e) {
        e.preventDefault()
        //send  user to db
        register(user)
    }

    return (
        <Container>

            <Header>

                <h1> {<SignIn size={35} />} Faça seu Cadastro</h1>
                <h2>Entre com suas informações de cadastro</h2>

            </Header>

            <form onSubmit={handleSubmit}>

                <Data>

                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" name="name" id='name' placeholder="Digite seu nome completo" onChange={handleOnChange} />
                    <br />

                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" name="email" id='email' placeholder="Digite seu e-mail" onChange={handleOnChange} />
                    <br />

                    <Label htmlFor="phone" >Telefone</Label>
                    <Input type="number" name="phone" id='phone' placeholder="Digite seu telefone" onChange={handleOnChange} />
                    <br />

                    <Label htmlFor="address" >Endereço</Label>
                    <Input type="text" name="address" id='address' placeholder="Digite seu endereço" onChange={handleOnChange} />
                    <br />

                    <Label htmlFor="password" >Senha</Label>
                    <Input type="password" name="password" id='password' placeholder="Digite sua senha" onChange={handleOnChange} />
                    <br />

                    <Label htmlFor="confirmpassword" >Confirme sua senha</Label>
                    <Input type="password" name="confirmpassword" id='confirmpassword' placeholder="Digite sua senha" onChange={handleOnChange} />
                    <br />

                </Data>

                <Button type="submit">Cadastre-se</Button>

            </form>

        </Container>


    )

}

