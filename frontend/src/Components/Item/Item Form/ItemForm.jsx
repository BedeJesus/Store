import React, { useState } from "react";
import { Bag } from 'phosphor-react'
import api from '../../../utils/api'
import './ItemForm.css'
import { useNavigate } from "react-router";
import useFlashMessage from '../../../hooks/useFlashMessage'


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
        <div className="cad_produto">

            <div className="cabecalho">
                <div className="login">

                    <h4>{<Bag size={30} />}  Faça o Cadastro do Produto</h4>
                </div>
                <h5>Entre com suas informações de cadastro do produto</h5>

            </div>

            <form onSubmit={submit}>
                <div className="dados">
                    <label for="title">Nome:</label>
                    <input type="text" name="title" maxlength="25" placeholder="Digite o nome do produto"  className="dados_produto" onChange={handleChange} />
                    <br />

                    <label for="short_desc" >Breve descrição:</label>
                    <input type="text" name="short_desc" maxlength="115" placeholder="Digite uma Breve Descrição" className="dados_produto" onChange={handleChange} />
                    <br />

                    <label for="long_desc" >Descrição completa:</label>
                    <input type="text" name="long_desc" maxLength='970' placeholder="Digite a Descrição Completa" className="dados_produto" onChange={handleChange} />
                    <br />

                    <label for="price" >Preço:</label>
                    <input type="number" name="price" step='any' placeholder="Digite o valor em R$:" className="dados_produto" onChange={handleChange} />
                    <br />

                    <label for="images" >Imagens:</label>
                    <input type="file" name="images" placeholder="Digite o valor em R$:" className="dados_produto" multiple='true' onChange={onFileChange} />
                    <br />


                </div>

                <div className="resto">

                    <button type="submit">Cadastre o produto</button>
                </div>

            </form>


        </div>
    )

}





















