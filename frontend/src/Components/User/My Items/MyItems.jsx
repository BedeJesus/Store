import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFlashMessage from '../../../hooks/useFlashMessage'
import api from '../../../utils/api'
import Card from '../../Card/Card'
import { ItemCards, Container, Filter, Input } from './styles'
import Pagination from '../../Pagination/Pagination'

export default function MyItems() {

    const [items, setItems] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()

    const [currentPage, setCurrentPage] = useState(1)
    const itemsInPage = 15
    const lastItemIndex = currentPage * itemsInPage
    const firstItemIndex = lastItemIndex - itemsInPage

    const [filter, setFilter] = useState('')
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()))
    const currentItems = filteredItems.slice(firstItemIndex, lastItemIndex)

    const [user, setUser] = useState({})

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        api.get('/items/myitems', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((response) => {
                setItems(response.data.items)
            })
    }, [token])


    useEffect(() => {
        api.get('/users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => [
            setUser(response.data)
        ])

    }, [token])


    async function concludeRent(id) {
        let msgType = 'success'

        const data = await api
            .patch(`/items/conclude/${id}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            })
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                console.log(err)
                msgType = 'error'
                return err.response.data
            })

        setFlashMessage(data.message, msgType)
    }

    function Button(item) {
        if (!item.available) {
            return 'done'
        } else if (item.renter) {
            return 'conclude'
        } else {
            return 'edit'
        }
    }

    return (

        <Container>
            <>
                <h1>Meus Itens</h1>
                {user.subscribed ?
                    <h2><Link to='/newitem'>Cadastre um novo Item</Link></h2>
                    :
                    <h2><Link to='/subscription'>Inscreva-se</Link></h2>
                }

            </>

            {items.length > 1 && (

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
            )}


            <ItemCards>

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
                    <h3>Você não tem nenhum item cadastrado</h3>
                )}

            </ItemCards>

        </Container>

    )

}
