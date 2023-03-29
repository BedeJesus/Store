import React, { useContext } from "react";
import { Context } from '../../context/UserContext'
import { Top, Container, Button, Store, MiddleButtons, Toggle } from './styles'
import Switch from "react-switch";
import SubMenu from "./SubMenu/SubMenu";
import { ThemeContext } from 'styled-components'

import { Sun, Moon } from 'phosphor-react';

export default function Menu({ toggleTheme }) {

    const { authenticated } = useContext(Context)

    const { title } = useContext(ThemeContext)

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

                <Toggle>

                    <Sun size={25} weight={title === 'light' ? 'fill' : 'regular'} />

                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor={'#FFFF00'}
                    />

                    <Moon size={25} weight={title === 'dark' ? 'fill' : 'regular'} />

                </Toggle>



            </Top>

        </Container>

    )
}