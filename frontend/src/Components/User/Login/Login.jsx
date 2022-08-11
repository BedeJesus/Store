import React from "react";
import './Login.css'
import { SignIn } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'

import { Context } from '../../../context/UserContext'


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
        <div class='um'>

            <div className="cabecalho">
                <div className="login">

                    <h4>{<SignIn size={30} />}  Faça seu Login</h4>
                </div>
                <h5>Entre com suas informações de login</h5>

            </div>

            <form onSubmit={handleSubmit}>
                <div className="dados">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" placeholder="Digite seu e-mail" className="dados_cliente" onChange={handleChange} />

                    <br />

                    <label for="senha" >Senha</label>
                    <input type="password" name="password" placeholder="Digite sua senha" className="dados_cliente" onChange={handleChange} />
                    <br />
                </div>

                <div className="resto">

                    <button type="submit">Entrar</button>
                    <h6>Não tem uma conta? <Link to='/register'>Registre-se</Link></h6>

                </div>

            </form>

        </div>


    )

}
















