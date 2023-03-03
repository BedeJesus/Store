import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
// import './DetailsItem.css'
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import {
    Button, Container, Data, LongDescription,
    Price, CreateCount, Box, Arrow, Arrows, Slider, Info, InfoItem, Input
} from './styles'

export default function DetailsItem() {

    const [item, setItem] = useState({})
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get(`/items/${id}`).then((response) => {
            setItem(response.data.item)
        })
    }, [id])

    async function rent() {
        let msgType = 'success'
        const data = await api.patch(`items/rent/${item._id}`, {
            Authorization: `Bearer ${JSON.parse(token)}`
        }).then((response) => {
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
    }

    //////////////images/////////////

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
        <Container>
            <h1>{item.title}</h1>

            <Box>

                <Slider>

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

                    {item.images.length > 1 && (

                        <Arrows>
                            <Arrow><ArrowLeft onClick={prevSlide} /></Arrow>
                            <Arrow><ArrowRight onClick={nextSlide} /></Arrow>
                        </Arrows>
                    )}

                </Slider>

                <Data>

                    <h1>Descrição Completa</h1>
                    <LongDescription>{item.long_desc}</LongDescription>

                    <Info>

                        <InfoItem>
                            <h2>Localização do item</h2>
                            <Price>Itaquera, São Paulo</Price>
                        </InfoItem>

                        <InfoItem>
                            <h2>Valor da locação/dia</h2>
                            <Price>{`R$${item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}</Price>
                        </InfoItem>

                        <InfoItem>
                            <h2>Dias desejados</h2>
                            <Input type={'number'} min={"1"}  />
                        </InfoItem>

                    </Info>

                    {token ? (
                        <Button onClick={rent}>Solicitar uma visita</Button>
                    ) : (
                        <CreateCount> Você precisa &nbsp;<Link to='/register'> criar com uma conta </Link> &nbsp; para solicitar o aluguel </CreateCount>
                    )}

                </Data>

            </Box>


        </Container>

    )
}

















