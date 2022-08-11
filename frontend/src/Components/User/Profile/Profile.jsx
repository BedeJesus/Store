import React, { useEffect,useState,useContext } from "react";
import { SignIn } from 'phosphor-react'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { Context } from "../../../context/UserContext";
import './Profile.css'

 export default function Profile() {


    const {logout } = useContext(Context)

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
        <div class='dois'>

            <div className="cabecalho">
                <div className="login">

                    <h4>{<SignIn size={30} />}   Atualize seus dados</h4>
                </div>
                

            </div>

            <form onSubmit={handleSubmit}>
                <div className="dados">

                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id='name' placeholder="Digite seu nome completo" className="dados_cliente" onChange={handleChange} value={user.name ||''} />
                    <br />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id='email' placeholder="Digite seu e-mail" className="dados_cliente" onChange={handleChange} value={user.email ||''}/>
                    <br />

                    <label htmlFor="phone" >Telefone</label>
                    <input type="number" name="phone" id='phone' placeholder="Digite seu telefone" className="dados_cliente" onChange={handleChange}  value={user.phone ||''}/>
                    <br />

                    <label htmlFor="address" >Endereço</label>
                    <input type="text" name="address" id='address' placeholder="Digite seu endereço" className="dados_cliente" onChange={handleChange} value={user.address ||''}/>
                    <br />

                    <label htmlFor="password" >Senha</label>
                    <input type="password" name="password" id='password' placeholder="Digite sua senha" className="dados_cliente" onChange={handleChange}/>
                    <br />

                    <label htmlFor="confirmpassword" >Confirme sua senha</label>
                    <input type="password" name="confirmpassword" id='confirmpassword' placeholder="Digite sua senha" className="dados_cliente" onChange={handleChange} />
                    <br />

                </div>

                <div className="resto">

                    <button className="btn1" type="submit">Atualizar</button>
                    <button onClick={logout}>Sair</button>
                </div>

            </form>

        </div>


    )
}



