import { useState, useContext, useRef } from 'react'
import { Context } from '../../../context/UserContext'
import { Container, Box, Options, Button } from './styles'

export default function SubMenu() {

    const [show, setShow] = useState(false)
    const { authenticated } = useContext(Context)

    const labelRef = useRef(null);

    const handleClick = () => {
        if (labelRef.current) {
            labelRef.current.click();
        }
    };

    return (

        <Container>

            <label ref={labelRef} for="burger" class="burger" >
                <input id="burger" type="checkbox" onClick={() => show ? setShow(false) : setShow(true)} />
                <span></span>
                <span></span>
                <span></span>
            </label>

            {show && (

                <Box>

                    {authenticated ? (
                        <Options>

                            <Button to='/myrents' onClick={handleClick}>Minhas Locações</Button>
                            <Button to='/myitems' onClick={handleClick}>Meus Itens</Button>
                            <Button to='/user/profile' onClick={handleClick}>Perfil</Button>

                        </Options>

                    ) : (

                        <Options>

                            <Button to='/login' onClick={handleClick}>Login</Button>
                            <Button to='/register' onClick={handleClick}>Cadastro</Button>

                        </Options>

                    )}

                </Box>
            )}

        </Container>
    )
}