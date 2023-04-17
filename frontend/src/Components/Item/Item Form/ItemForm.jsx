import React, { useState } from "react";
import { Bag } from 'phosphor-react'
import api from '../../../utils/api'

import { useNavigate } from "react-router";
import useFlashMessage from '../../../hooks/useFlashMessage'

import { Container, Button, Data, Header, Input, Label, Box, DivButton } from './../../../styles/form'


export default function ItemForm(props) {

    const [item, setitem] = useState(props.itemData || {})
    const [preview, setPreview] = useState([])

    function onFileChange(e) {
        setitem({ ...item, images: [...e.target.files] })
        setPreview(Array.from(e.target.files))

    }

    function handleChange(e) {
        setitem({ ...item, [e.target.name]: e.target.value })

    }

    function submit(e) {
        e.preventDefault()
        registerItem(item)
    }


    //////////////////////////////////////

    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()
    const navigate = useNavigate()

    async function registerItem(item) {
        let msgType = 'success'
        const formData = new FormData()

        await Object.keys(item).forEach((key) => {
            if (key === 'images') {
                for (let i = 0; i < item[key].length; i++) {
                    formData.append('images', item[key][i])
                }

            } else {
                formData.append(key, item[key])
            }
        })

        const data = await api.post('items/create', formData, {
            Authorization: `Bearer ${JSON.parse(token)}`,
            'Content-Type': 'multipart/form-data'
        })
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                msgType = 'error'
                return err.response.data
            })

        setFlashMessage(data.message, msgType)

        if (msgType !== 'error') {
            navigate('/myitems')
        }

    }


    return (
        <Container>
            <Box>

                <Header>

                    <h1>{<Bag/>} Faça o Cadastro do Produto</h1>
                    <h2>Entre com suas informações de cadastro do produto</h2>

                </Header>

                <form onSubmit={submit}>

                    <Data>

                        <Label for="title">Nome</Label>
                        <Input type="text" name="title" maxLength="20" placeholder="Digite o nome do produto" onChange={handleChange} />
                        <br />

                        <Label for="short_desc" >Breve descrição</Label>
                        <Input type="text" name="short_desc" maxLength="120" placeholder="Digite uma Breve Descrição" onChange={handleChange} />
                        <br />

                        <Label for="long_desc" >Descrição completa</Label>
                        <Input type="text" name="long_desc" maxLength='970' placeholder="Digite a Descrição Completa" onChange={handleChange} />
                        <br />

                        <Label for="brand" >Marca</Label>
                        <Input type="text" name="brand" maxLength='30' placeholder="Digite a Marca do Produto" onChange={handleChange} />
                        <br />

                        <Label for="price" >Preço</Label>
                        <Input type="number" name="price" step='any' placeholder="Digite o valor em R$:" onChange={handleChange} />
                        <br />

                        <Label for="images" >Imagens</Label>
                        <Input type="file" name="images" placeholder="Digite o valor em R$:" multiple='true' onChange={onFileChange} />
                        <br />

                    </Data>

                    <DivButton>
                        <Button type="submit">Cadastre o produto</Button>
                    </DivButton>

                </form>

            </Box>

        </Container>
    )

}





















