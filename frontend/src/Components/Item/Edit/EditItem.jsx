import { useEffect, useState } from 'react'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { useNavigate, useParams } from 'react-router'

import { Button, Container, Data, Input, Label, Footer, Title } from './styles'


export default function EditItem(props) {

    const [item, setItem] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        api.get(`/items/${id}`, {

            Authorization: `Bearer ${JSON.parse(token)}`,

        })
            .then((response) => {
                setItem(response.data.item)
            })

    }, [token, id])

    async function updateItem(item) {
        let msgType = 'sucess'
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

        const data = await api.patch(`items/${item._id}`, formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data

        })

        setFlashMessage(data.message, msgType)

    }


    const [items, setItems] = useState([])
    const navigate = useNavigate()

    async function removeItem(id) {
        let msgType = "success"
        const data = await api.delete(`/items/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            }
        }).then((response) => {
            const updatedItems = items.filter((item) => item._id !== id)
            setItems(updatedItems)
            navigate('/myitems')
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)

    }

    //////////////////PetForm//////////////////
    const [preview, setPreview] = useState([])

    function onFileChange(e) {
        setItem({ ...item, images: [...e.target.files] })
        setPreview(Array.from(e.target.files))
    }

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault()
        updateItem(item)
    }



    return (
        <Container>
            <Title>Editando o Item: {item.title}</Title>

            <form onSubmit={submit}>

                <Data>
                    <Label for="title">Nome:</Label>
                    <Input type="text" name="title" maxlength="25" placeholder="Digite o nome do produto" onChange={handleChange} value={item.title} />
                    <br />

                    <Label for="short_desc" >Breve descrição:</Label>
                    <Input type="text" name="short_desc" maxlength="115" placeholder="Digite uma Breve Descrição" onChange={handleChange} value={item.short_desc} />
                    <br />

                    <Label for="long_desc" >Descrição completa:</Label>
                    <Input type="text" name="long_desc" maxLength='970' placeholder="Digite a Descrição Completa" onChange={handleChange} value={item.long_desc} />
                    <br />

                    <Label for="price" >Preço:</Label>
                    <Input type="number" name="price" step='any' placeholder="Digite o valor em R$:" onChange={handleChange} value={item.price} />
                    <br />

                    <Label for="images" >Imagens:</Label>
                    <Input type="file" name="images" placeholder="Digite o valor em R$:" multiple='true' onChange={onFileChange} />
                    <br />


                </Data>

                <Footer>

                    <Button type="submit">Atualize o produto</Button>
                    <Button onClick={() => { removeItem(item._id) }}>Excluir o produto</Button>
                </Footer>

            </form>

        </Container>
    )

}














