import React, { useContext } from "react";
import { Context } from '../../context/UserContext'
import { Top, Container, Button, Store, MiddleButtons, Toggle } from './styles'
import Switch from "react-switch";
import SubMenu from "./SubMenu/SubMenu";
import { ThemeContext } from 'styled-components'
import { Sun, Moon, ShareNetwork } from 'phosphor-react';

export default function Menu({ toggleTheme }) {

    const { authenticated } = useContext(Context)
    const { title } = useContext(ThemeContext)

    

    return (
        <Container>

            <Top>

                <SubMenu />

                <Store to='/'>Customer <ShareNetwork size={35}/> </Store> 

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

                <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    uncheckedIcon={<Sun size={26} />}
                    checkedIcon={<Moon size={28} />}
                    onColor={'#FFFF00'}
                />

            </Top>

        </Container>

    )
}