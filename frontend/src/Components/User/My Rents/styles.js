import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    color: whitesmoke;

    h1{
      margin-bottom: .5em;
    }

`

export const Rents = styled.div`

    display: flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    margin: 0 5%;
`

export const Item = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.5% 0;
    width: 22%;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.5s;

    background: linear-gradient(145deg, #2e2e2e, #272727);
    box-shadow:  19px 19px 38px #151515,
             -19px -19px 38px #2b2b2b;

img {
    height:14.6em;
    width: 100%;
    object-fit: cover;
}

@media(max-width : 1200px) {
        width: 30%;
    } 

    @media(max-width : 850px) {
        width: 47%;
    } 


`

export const Description = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 100%;

span {
    font-size: 1.3em;
    font-weight:400;
    justify-content: center;
}

p{
    color: rgb(255, 56, 86) ;
    font-size: 1.5em;
    font-weight: bold;
}

`

export const ItemLink = styled(Link)`

    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
    color: white;
    transition: .3s;
    

:hover {
    color: rgb(255, 56, 86) ;
}


`