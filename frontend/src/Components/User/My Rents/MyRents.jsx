import api from '../../../utils/api'
import { useEffect, useState } from 'react'

import './MyRents.css'
import { Link } from 'react-router-dom'

export default function MyRents() {

    const [items, setItems] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api
            .get('/items/myrents', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            })
            .then((response) => {
                setItems(response.data.items)
            })
    }, [token])




    return (
        <div className='myrents'>
            <div>
                <h1>Minhas Locações</h1>
            </div>

            <div className='rents'>

                {items.length > 0 &&
                    items.map((item) => (
                        <div className='pet_data'>
                            <div className='image'>
                                <img
                                    src={`${process.env.REACT_APP_API}/images/items/${item.images[0]}`}
                                    alt={item.name}

                                />
                            </div>
                            <div className='desc'>
                                <Link to={`item/${item._id}`} className='item_title'>{item.title}</Link>
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
                                        <p>Locação foi realizada</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                {items.length === 0 && <h2>Ainda não há items solicitados para locação</h2>}
            </div>

        </div>
    )
}