import api from '../../../utils/api'
import { useEffect, useState } from 'react'
import { Container, Description, ItemLink, Item, Rents } from './styles'

export default function MyRents() {

    const [items, setItems] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/items/myrents', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
            .then((response) => {
                setItems(response.data.items)
            })
    }, [token])


    return (

        <Container>

            <h1>Minhas Locações</h1>

            <Rents>

                {items.length > 0 &&

                    items.map((item) => (

                        <Item>

                            <ItemLink to={`item/${item._id}`}> {item.title} </ItemLink>

                            <img
                                src={`${process.env.REACT_APP_API}/images/items/${item.images[0]}`}
                                alt={item.name}
                            />

                            <Description>

                                <div>

                                    <h2>Ligue para:</h2>
                                    <span>{item.user.phone}</span>

                                    <h2>Fale com:</h2>
                                    <span>{item.user.name}</span>

                                </div>

                                <div>
                                    {item.available ? (
                                        <p>Locação em processo</p>
                                    ) : (
                                        <p>Locação realizada</p>
                                    )}
                                </div>

                            </Description>

                        </Item>
                    ))}

                {items.length === 0 && <h2>Você ainda não solicitou uma locação</h2>}

            </Rents>

        </Container>
    )
}