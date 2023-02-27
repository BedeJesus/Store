import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    color: white;

`

export const Rents = styled.div`

    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    margin-bottom: 1%;
`

export const PetData = styled.div`

    display: flex;
    flex-direction:column;
    border-bottom: solid 4px black;

 img {
    display: flex;
    justify-content: center;
    width: 23em;
    height: 23em;
    border-radius: 10px;

    @media(max-width : 1515px) {
        width: 23em;
        height: 23em;
    }

}

@media(max-width : 1515px) {
    margin-left:2% ;
    margin-right:2% ;
}


`

export const Description = styled.div`

    display: flex;
    height: 19em;
    flex-direction: column;
    justify-content: center;

span {
    font-size: 1.3em;
    font-weight:400;
    justify-content: center;
}

@media(max-width : 1515px) {
    height: 17em;
}

@media(max-width : 679px) {
    height: 17em; 
}

`

export const ItemLink = styled(Link)`

    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
    color: white;
    transition: .3s;

:hover {
    color:red;
}


`