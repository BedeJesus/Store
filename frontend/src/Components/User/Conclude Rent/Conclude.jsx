import api from "../../../utils/api"
import useFlashMessage from "../../../hooks/useFlashMessage"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import './Conclude.css'

import {Container,Button,Data,LongDescription,Price} from './styles'

export default function Conclude() {

    const [item, setItem] = useState({})
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get(`/items/${id}`).then((response) => {
            setItem(response.data.item)
        })
    }, [id]) 

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


    //Images 
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === item.images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? item.images.length - 1 : current - 1);
    };

    if (!Array.isArray(item.images) || item.images.length <= 0) {
        return null;
    }




    return (
        <>

            {item.title && (

                <Container>

                    <div className='slider'>

                        {item.images.map((image, index) => {
                            return (
                                <div className={index === current ? 'slide active' : 'slide'}
                                    key={index}>

                                    {index === current && (

                                        <img
                                            src={`${process.env.REACT_APP_API}/images/items/${image}`}
                                            alt={item.title}
                                            key={index}
                                            className='image'
                                        />
                                    )}
                                </div>
                            )
                        })}

                        {item.images.length > 1 ? (
                            <>
                                <ArrowLeft className='left-arrow' onClick={prevSlide} />
                                <ArrowRight className='right-arrow' onClick={nextSlide} />
                            </>
                        ) : (
                            <></>
                        )}


                    </div>


                    <Data>

                        <h1>Nome do alugador:</h1><p></p>
                        <LongDescription>{item.renter.name}</LongDescription>

                        <p></p>

                        <h1>Valor da locação:</h1>
                        <Price>{`R$${item.price}`}</Price>

                        <p></p>

                        {token ? (
                            <Button onClick={() => concludeRent(item._id)}>Concluir Locação</Button>
                        ) : (
                            <></>
                        )}

                    </Data>

                </Container>
            )}

        </>
    )
}












