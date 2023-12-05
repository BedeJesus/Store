import api from "../../../utils/api"
import useFlashMessage from "../../../hooks/useFlashMessage"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { Container, Box, Slider, Data, Button, Arrows, LeftArrow,RightArrow, Image } from './styles'

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

        <Container>

            <h1>{item.title}</h1>

            <Box>

                <Slider>

                    {item.images.map((image, index) => {

                        return (
                            <>
                                {index === current && (

                                    <Image
                                        src={image}
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
                        <Button onClick={() => concludeRent(item._id)}>Concluir Locação</Button>
                    )}

                </Data>

            </Box>

        </Container>

    )
}












