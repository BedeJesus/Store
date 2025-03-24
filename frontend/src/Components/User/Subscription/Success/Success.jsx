import { Box, Container } from './styles'
import { Link } from 'react-router-dom'


export default function Success() {

    return (
        <Container>
            <Box>

                <h1>Parabéns!</h1>

                <h2>Você está inscrito na plataforma!</h2>

                <p>Agora você pode anunciar seus itens para outros usuários mostrarem interesse.</p>

                <p>Vá até a <Link to='/myitems'>pagina dos seus itens</Link> e crie o novo anuncio!</p>

            </Box>
        </Container>
    )

}