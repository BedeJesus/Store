import React, { useEffect, useState, useContext } from "react";
import { SignIn } from 'phosphor-react'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { Context } from "../../../context/UserContext";

import { Button, Container, Data, Header, Input, Label, TwoButtons, Box } from './../../../styles/form'

export default function Profile() {


    const { logout } = useContext(Context)

    const [user, setUser] = useState({})
    const [preview, setPreview] = useState('')
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => [
            setUser(response.data)
        ])

    }, [token])

    function onFileChange(e) {
        setPreview(e.target.files[0])
        setUser({ ...user, [e.target.name]: e.target.files[0] })
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })


    }

    async function handleSubmit(e) {
        e.preventDefault()

        let msgType = 'success'

        const formData = new FormData()

        await Object.keys(user).forEach((key) =>
            formData.append(key, user[key])
        )

        const data = await api.patch(`/users/edit/${user._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data',

            },
        }).then((response) => {
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)

    }

    return (
        <Container>

            <Box>

                <Header>
                    <h1> {<SignIn />} Atualize seus dados </h1>
                </Header>

                <form onSubmit={handleSubmit}>

                    <Data>

                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input type="text" maxLength="14" readOnly name="cnpj" id='cnpj' placeholder="Digite o seu CNPJ" onChange={handleChange} value={user.cnpj || ''} />
                        <br />

                        <Label htmlFor="business_name">Razão Social</Label>
                        <Input type="text" readOnly name="business_name" id='business_name' placeholder="Digite sua razão social" onChange={handleChange} value={user.business_name || ''}/>
                        <br />

                        <Label htmlFor="cnae">CNAE</Label>
                        <Input type="text" readOnly name="cnae" maxLength="7" id='cnae' placeholder="Digite seu CNAE" onChange={handleChange} value={user.cnae || ''}/>
                        <br />

                        <Label htmlFor="name">Nome do Titular</Label>
                        <Input type="text" name="name" id='name' placeholder="Digite seu nome completo" onChange={handleChange} value={user.name || ''} />
                        <br />

                        <Label htmlFor="cpf">CPF do Titular</Label>
                        <Input type="text" maxLength="11" name="cpf" id='cpf' placeholder="Digite o CPF do Titular do CNPJ" onChange={handleChange} value={user.cpf || ''} />
                        <br />

                        <Label htmlFor="phone" >Telefone</Label>
                        <Input type="number" name="phone" id='phone' placeholder="Digite seu telefone" onChange={handleChange} value={user.phone || ''} />
                        <br />

                        <Label htmlFor="address" >Cidade e Estado</Label>
                        <Input type="text" name="address" id='address' placeholder="Digite sua cidade de estado" onChange={handleChange} value={user.address || ''} />
                        <br />

                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" name="email" id='email' placeholder="Digite seu e-mail" onChange={handleChange} value={user.email || ''} />
                        <br />

                        <Label htmlFor="password" >Senha</Label>
                        <Input type="password" name="password" id='password' placeholder="Digite sua senha" onChange={handleChange} />
                        <br />

                        <Label htmlFor="confirmpassword" >Confirme sua senha</Label>
                        <Input type="password" name="confirmpassword" id='confirmpassword' placeholder="Digite sua senha" onChange={handleChange} />
                        <br />

                    </Data>

                    <TwoButtons>

                        <Button className="btn1" type="submit">Atualizar</Button>
                        <Button onClick={logout}>Sair</Button>

                    </TwoButtons>

                </form>

            </Box>

        </Container>


    )
}



