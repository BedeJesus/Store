import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFlashMessage from '../../../hooks/useFlashMessage'
import api from '../../../utils/api'
import Card from '../../Card/Card'
import './MyItems.css'


export default function MyItems() {

    const [items, setItems] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const { setFlashMessage } = useFlashMessage()

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
        }else if(item.renter){
            return'conclude'
        } else {
            return 'edit'
        }
    }

    return (

        <>
            <div className='content'>
                <h1>Meus Itens</h1>
                <Link to='/newitem'>Clique aqui para cadastrar um novo Item</Link>
            </div>

            <div className='items'>


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
                    ))
                }

            </div>

        </>


    )






}















