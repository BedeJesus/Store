import React from "react";
import { Link } from "react-router-dom";

import { CardButton, Container, Content, Description, Price, Title } from './styles'

export default function Produto(props) {



    function Button(type) {
        if (type === 'rent') {
            return <Link to={`item/${props.item._id}`}>Mais detalhes</Link>

        } else if (type === 'edit') {
            return <Link to={`edititem/${props.item._id}`}>Editar</Link>

        } else if (type === 'conclude') {
            return <Link to={`concluderent/${props.item._id}`}>Concluir Locação</Link>
        } else if (type === 'done') {
            return <span>Locação completa</span>

        } else {
            return <button>Como vc caiu aqui</button>
        }
    }



    return (

        <Container> 
            <Title>{props.name}</Title>

            <Content>

                <img src={props.image} alt={props.name} />

                <Description>
                    {props.description}
                </Description>

                <Price>
                    R${props.price}
                </Price>

                <CardButton>
                    {Button(props.button)}
                    {console.log(props.button)}
                </CardButton>

            </Content>

        </Container>




    )

}


