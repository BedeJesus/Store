import React from "react";
import { SignIn } from 'phosphor-react'
import { useState } from "react";
import { useContext } from "react";
import { Context } from '../../../context/UserContext'

import { Container, Header, Input, Label, Box, DivButton, Data, Button } from './../../../styles/form'

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

            <Box>

                <Header>

                    <h1> <SignIn size={35} /> Faça seu Cadastro</h1>
                    <h2>Entre com suas informações de cadastro</h2>

                </Header>

                <form onSubmit={handleSubmit}>

                    <Data>
                        
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input type="text" maxLength="14" name="cnpj" id='cnpj' placeholder="Digite o seu CNPJ" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="business_name">Razão Social</Label>
                        <Input type="text" name="business_name" id='business_name' placeholder="Digite sua razão social" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="cnae">CNAE</Label>
                        <Input type="text" name="cnae" maxLength="7" id='cnae' placeholder="Digite seu CNAE" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="name">Nome do Titular</Label>
                        <Input type="text" name="name" id='name' placeholder="Digite o nome completo do Titular do CNPJ" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="cpf">CPF do Titular</Label>
                        <Input type="text"  maxLength="11"name="cpf" id='cpf' placeholder="Digite o CPF do Titular do CNPJ" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="phone" >Telefone</Label>
                        <Input type="number" name="phone" id='phone' placeholder="Digite o telefone para contato. Ex: 11123456789" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="address" >Cidade e estado</Label>
                        <Input type="text" name="address" id='address' placeholder="Digite sua cidade e estado" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" name="email" id='email' placeholder="Digite o email para cadastro" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="password" >Senha</Label>
                        <Input type="password" name="password" id='password' placeholder="Digite sua senha" onChange={handleOnChange} />
                        <br />

                        <Label htmlFor="confirmpassword" >Confirme sua senha</Label>
                        <Input type="password" name="confirmpassword" id='confirmpassword' placeholder="Digite sua senha" onChange={handleOnChange} />
                        <br />

                    </Data>

                    <DivButton>
                        <Button type="submit">Cadastre-se</Button>
                    </DivButton>

                </form>

            </Box>

        </Container>

    )

}

