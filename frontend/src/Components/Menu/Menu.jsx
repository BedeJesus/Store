import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from '../../context/UserContext'
import { Top, Container,Button, Store } from './styles'

export default function Menu() {

    const { authenticated } = useContext(Context)

    return (
        <Container>

            <Top>

                <Store to='/'>Store (logo)</Store>

                {authenticated ? (
                    <div>
                        <Button to='/myitems'>Meus Itens</Button>
                        <Button to='/myrents'>Minhas Locações</Button>
                        <Button to='/user/profile'>Perfil</Button>
                    </div>

                ) : (
                    <div>
                        <Button to='/login'>Login</Button>
                        <Button to='/register'>Cadastro</Button>
                    </div>

                )}

                {/* CRIAR UM BOTAO DE SUB MENU PARA MEDIA QUERY */}

                <Link to='/'>Switch</Link>

            </Top>

        </Container>

    )
}