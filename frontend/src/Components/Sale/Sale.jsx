import { useEffect, useState } from "react";
import Card from '../Card/Card'
import api from "../../utils/api";
import { Container, Items, Input, Filter } from './styles'
import Pagination from "../Pagination/Pagination";

export default function Sale(props) {

    const [items, setItems] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const itemsInPage = 15
    const lastItemIndex = currentPage * itemsInPage
    const firstItemIndex = lastItemIndex - itemsInPage

    const [filter, setFilter] = useState('')
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
    const currentItems = filteredItems.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }


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

        <Container>
            <h1>Todos os Itens</h1>

            <Filter>

                <Input placeholder='Filtre por Titulo'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

                <Pagination itensInPage={itemsInPage}
                    totalItens={filteredItems.length}
                    paginate={paginate}
                />

            </Filter>


            <Items>

                {items.length > 0 &&
                    currentItems.map((item) => (

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

            </Items>

        </Container>

    )
}


