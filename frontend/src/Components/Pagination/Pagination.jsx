import { Container, Button } from './styles'

export default function Pagination({ itensInPage, totalItens, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItens / itensInPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <nav>
            <Container>

                {pageNumbers.map(number => (
                    
                    <div key={number} >
                        <Button onClick={() => paginate(number)}  >
                            {number}
                        </Button>
                    </div>
                ))}

            </Container>
        </nav>

    )
}

