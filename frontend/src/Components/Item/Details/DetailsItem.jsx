import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import {
    Button, Container, Data, LongDescription,
    Price, CreateCount, Box, RightArrow, LeftArrow,
    Arrows, Slider, Image, Info, InfoItem, Input, Highlight
} from './styles'
import Loader from '../../Loader/Loader'

export default function DetailsItem() {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [reqLoading, setReqLoading] = useState(false)
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')


    useEffect(() => {
        api.get(`/items/${id}`).then((response) => {
            setItem(response.data.item)
            setLoading(false)
        })

    }, [id])

    async function rent() {
        setReqLoading(true)
        let msgType = 'success'
        console.log(`Bearer ${JSON.parse(token)}`)
        const data = await api.patch(`items/rent/${item._id}`, {

            Authorization: `Bearer ${JSON.parse(token)}`

        }).then((response) => {
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })
        setReqLoading(false)
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

            {!loading ? (

                <>
                    <h1>{item.title}</h1>

                    <Box>

                        <Slider>

                            {item.images.map((image, index) => {

                                return (
                                    <>
                                        {index === current && (

                                            <Image
                                                src={`${process.env.REACT_APP_API}/images/items/${image}`}
                                                alt={item.title}
                                                key={item.images.length}
                                            />
                                        )}
                                    </>
                                )
                            })}

                            {item.images.length > 1 && (

                                <Arrows>
                                    <LeftArrow onClick={prevSlide} />
                                    <RightArrow onClick={nextSlide} />
                                </Arrows>
                            )}

                        </Slider>

                        <Data>

                            <h1>Descrição Completa</h1>
                            <LongDescription>{item.long_desc}</LongDescription>

                            <Info>

                                <InfoItem>
                                    <h2>Localização do item</h2>
                                    <Price>{item.user.address}</Price>
                                </InfoItem>

                                <InfoItem>
                                    <h2>Valor da locação/dia</h2>
                                    <Price>{`R$${item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}</Price>
                                </InfoItem>

                            </Info>

                            {token ? (
                                <Button onClick={rent} disabled={reqLoading}>{!reqLoading ? "Solicitar uma Visita" : "Solicitando Visita..."}</Button>
                            ) : (
                                <CreateCount> Você precisa &nbsp;<Highlight to='/register'> criar uma conta </Highlight> &nbsp; para solicitar a locação </CreateCount>
                            )}

                        </Data>

                    </Box>

                </>

            ) : (

                <Loader />

            )}


        </Container>

    )
}


