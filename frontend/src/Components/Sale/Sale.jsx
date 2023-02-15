import { useEffect, useState } from "react";
import Card from '../Card/Card'
import api from "../../utils/api";
import {Container} from './styles'

export default function Sale(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        api.get('/items').then((response) => {
            setItems(response.data.items)
        })
    }, [])

    function Button(item) {
        if (!item.available) {
            return 'done'
        } else {
            return 'rent'
        }
    }


    return (

        <>
            <h1>Todos os Itens</h1>

            <Container >

                {items.length > 0 &&
                    items.map((item) => (

                        <Card
                            item={item}
                            available={item.available}
                            name={item.title}
                            image={`${process.env.REACT_APP_API}/images/items/${item.images[0]}`}
                            price={item.price}
                            description={item.short_desc}
                            button={Button(item)}
                        />
                    ))}
                {items.length === 0 && (
                    <h3>Não há itens cadastrados ou disponiveis para locação</h3>
                )}


            </Container>



        </>



    )
}

















