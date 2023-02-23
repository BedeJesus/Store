import { useState, useContext } from 'react'
import { Context } from '../../../context/UserContext'


import { Container, Box, Options, Button } from './styles'

export default function SubMenu() {

    const [show, setShow] = useState(false)
    const { authenticated } = useContext(Context)


    return (

        <Container>

            <label for="burger" class="burger" >
                <input id="burger" type="checkbox" onClick={() => show ? setShow(false) : setShow(true)} />
                <span></span>
                <span></span>
                <span></span>
            </label>

            {show && (
                
                <Box>

                    {authenticated ? (
                        <Options>

                            <Button to='/myitems'>Meus Itens</Button>
                            <Button to='/myrents'>Minhas Locações</Button>
                            <Button to='/user/profile'>Perfil</Button>

                        </Options>

                    ) : (

                        <Options>

                            <Button to='/login'>Login</Button>
                            <Button to='/register'>Cadastro</Button>

                        </Options>

                    )}

                </Box>
            ) }

        </Container>
    )
}