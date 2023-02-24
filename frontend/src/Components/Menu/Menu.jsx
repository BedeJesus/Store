import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from '../../context/UserContext'
import { Top, Container, Button, Store, MiddleButtons } from './styles'

import SubMenu from "./SubMenu/SubMenu";

export default function Menu() {

    const { authenticated } = useContext(Context)

    return (
        <Container>

            <Top>

                <SubMenu />

                <Store to='/'>Store (logo)</Store>

                {authenticated ? (
                    <>
                        <MiddleButtons>
                            <Button to='/myitems'>Meus Itens</Button>
                            <Button to='/myrents'>Minhas Locações</Button>
                            <Button to='/user/profile'>Perfil</Button>
                        </MiddleButtons>

                    </>

                ) : (
                    
                    <>

                        <MiddleButtons>
                            <Button to='/login'>Login</Button>
                            <Button to='/register'>Cadastro</Button>
                        </MiddleButtons>

                    </>

                )}

                <Store to='/'>Switch</Store>

            </Top>

        </Container>

    )
}