import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from '../../context/UserContext'
import { Buttons, Container } from './styles'

export default function Menu(props) {

    const { authenticated } = useContext(Context)

    return (
        <Container>
            <Buttons>

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

            </Buttons>

        </Container>

    )
}