import React from "react";
import './Register.css'
import { SignIn } from 'phosphor-react'
import { useState } from "react";
import { useContext } from "react";
import { Context } from '../../../context/UserContext'

export default function Register() {

    
    const [user, setUser] = useState({})
    const { register } = useContext(Context)

    //get user data
    function handleOnChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    function handleSubmit(e) {
        e.preventDefault()
        //send  user to db
        register(user)
    }

    return (
        <div class='dois'>

            <div className="cabecalho">
                <div className="login">

                    <h4>{<SignIn size={30} />}  Faça seu Cadastro</h4>
                </div>
                <h5>Entre com suas informações de cadastro</h5>

            </div>

            <form onSubmit={handleSubmit}>
                <div className="dados">

                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" id='name' placeholder="Digite seu nome completo" className="dados_cliente" onChange={handleOnChange} />
                    <br />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id='email' placeholder="Digite seu e-mail" className="dados_cliente" onChange={handleOnChange}/>
                    <br />

                    <label htmlFor="phone" >Telefone</label>
                    <input type="number" name="phone" id='phone' placeholder="Digite seu telefone" className="dados_cliente" onChange={handleOnChange} />
                    <br />

                    <label htmlFor="address" >Endereço</label>
                    <input type="text" name="address" id='address' placeholder="Digite seu endereço" className="dados_cliente" onChange={handleOnChange} />
                    <br />

                    <label htmlFor="password" >Senha</label>
                    <input type="password" name="password" id='password' placeholder="Digite sua senha" className="dados_cliente" onChange={handleOnChange} />
                    <br />

                    <label htmlFor="confirmpassword" >Confirme sua senha</label>
                    <input type="password" name="confirmpassword" id='confirmpassword' placeholder="Digite sua senha" className="dados_cliente" onChange={handleOnChange} />
                    <br />




                </div>

                <div className="resto">

                    <button type="submit">Cadastre-se</button>
                </div>

            </form>

        </div>


    )

}

