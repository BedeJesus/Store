import api from '../../../utils/api'
import { useEffect, useState } from 'react'
import { Container, Description, ItemLink, Item, Rents, WhatsApp, Email, Options } from './styles'
import { WhatsappLogo, UserCircle, Envelope } from 'phosphor-react'

export default function MyRents() {

    const [items, setItems] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        api.get('/items/myrents', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
            .then((response) => {
                setItems(response.data.items)
                setLoading(false)
            })
    }, [token])


    return (

        <Container>

            <h1>Minhas Locações</h1>

            {!loading ? (

                <Rents>

                    {items.length > 0 &&

                        items.map((item) => (

                            <Item>

                                <ItemLink to={`item/${item._id}`}> {item.title} </ItemLink>

                                <img
                                    src={item.images[0]}
                                    alt={item.name}
                                />

                                <Description>

                                    <Options>

                                        <WhatsApp href={`https://api.whatsapp.com/send?phone=${item.user.phone}`}
                                            target="_blank" >
                                            <WhatsappLogo size={45} />
                                            Envie uma mensagem
                                        </WhatsApp>

                                        <Email href={`mailto:${item.user.email}`}>
                                            <Envelope size={45} />
                                            Envie um e-mail
                                        </Email>

                                        <span> <UserCircle size={45} />Fale com {item.user.name.substring(0, item.user.name.indexOf(' '))} </span>

                                    </Options>

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

            ) : (
            
                <h1>Carregando</h1>
            
            )}


        </Container>
    )
}