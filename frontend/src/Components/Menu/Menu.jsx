import React, { useContext } from "react";
import './Menu.css'
import { Link } from 'react-router-dom'

import { Context } from '../../context/UserContext'

export default function Menu(props) {

    const { authenticated } = useContext(Context)

    return (
        <div className="menu">
            <h1>Store</h1>
            <div className="buttons">

                <Link to='/'>Ofertas</Link>

                {authenticated ? (
                    <>
                        <Link to='/myitems'>Meus Itens</Link>
                        <Link to='/myrents'>Minhas locações</Link>
                        <Link to='/user/profile'>Perfil</Link>

                    </>

                ) : (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Cadastro</Link>


                    </>

                )

                }






            </div>

        </div>

    )
}