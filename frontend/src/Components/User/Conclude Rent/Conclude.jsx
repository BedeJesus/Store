import api from "../../../utils/api"
import useFlashMessage from "../../../hooks/useFlashMessage"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {useNavigate } from "react-router-dom";


import { Container, Box, Slider, Data, Button, Arrows, LeftArrow, RightArrow, Image } from './styles'
import Loader from "../../Loader/Loader"

export default function Conclude() {

    const navigate = useNavigate()

    const [item, setItem] = useState({})
    const { id } = useParams()
    const { setFlashMessage } = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')
    const [loading, setLoading] = useState(true)
    const [concludeLoading, setConcludeLoading] = useState(false)

    useEffect(() => {
        api.get(`/items/${id}`).then((response) => {
            setItem(response.data.item)
            setLoading(false)
        })

    }, [id])

    async function concludeRent(id) {
        let msgType = 'success'

        setConcludeLoading(true)

        const data = await api
            .patch(`/items/conclude/${id}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            })
            .then((response) => {
                setConcludeLoading(false)
                return response.data
            })
            .catch((err) => {
                console.log(err)
                msgType = 'error'
                setConcludeLoading(false)
                return err.response.data
            })

        setFlashMessage(data.message, msgType)
        navigate('/')
    }


    //Images 
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === item.images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? item.images.length - 1 : current - 1);
    };

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
                                                key={index}
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

                            <h2>Nome do locador: {item.renter.name}</h2>

                            <h2>Telefone do locador: {item.renter.phone}</h2>

                            <h2>Valor da locação: {`R$${item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}</h2>

                            {token && (
                                <Button onClick={() => concludeRent(item._id)} disabled={concludeLoading}>{!concludeLoading ? "Concluir Locação" : "Concluindo Locação..."}</Button>
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












