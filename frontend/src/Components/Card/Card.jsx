import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

export default function Produto(props) {



    function Button(type){
        if(type ==='rent'){
           return <Link to ={`item/${props.item._id}`}>Mais detalhes</Link>

        } else if(type ==='edit'){
            return <Link to ={`edititem/${props.item._id}`}>Editar</Link>

        }else if(type ==='conclude'){
            return <Link to ={`concluderent/${props.item._id}`}>Concluir Locação</Link>
        }else if(type ==='done'){
            return <span>Locação completa</span>

        }else{
            return <button>Como vc caiu aqui</button>
        }
    }

    

    return (

        <div class="Card"> {/*Colocando o estilo que foi passado através da variavel cardStyle */}
            <div class="Title">{props.name}</div>

            <div class="Content">

                <img src={props.image} alt={props.name} />

                <div className="description">
                    {props.description}
                </div>

                <div className="price">
                    R${props.price}
                </div>

                <div className="button">
                   {Button(props.button)}

                </div>
            </div>

        </div>

        


    )

}


