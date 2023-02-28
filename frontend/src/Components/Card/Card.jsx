import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Status, Container, Content, Description, Title } from './styles'

export default function Produto(props) {

    const navigate = useNavigate()

    function Button(type) {
        if (type === 'rent') {
            return 'R$' + props.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })

        } else if (type === 'edit') {
            return <span>Editar</span>

        } else if (type === 'conclude') {
            return <span>Concluir Locação</span>

        } else if (type === 'done') {
            return <span>Locação completa</span>

        }
    }

    function handleClick(type) {

        if (type === 'rent') {
            navigate(`item/${props.item._id}`)

        } else if (type === 'edit') {
            navigate(`edititem/${props.item._id}`)

        } else if (type === 'conclude') {
            navigate(`concluderent/${props.item._id}`)

        }
    }


    return (

        <Container onClick={() => handleClick(props.button)}>
            <Title>{props.name}</Title>

            <Content>

                <img src={props.image} alt={props.name} />

                <Description>
                    {props.description}
                </Description>

                <Status>
                    {Button(props.button)}
                </Status>

            </Content>

        </Container>

    )

}


