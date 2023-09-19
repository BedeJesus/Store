import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    color: ${props => props.theme.colors.primary_text};

    h1{
      margin-bottom: .5em;
    }
`

export const Rents = styled.div`

    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
    margin: 0 1%;

    h2{
        margin:auto;
    }
`

export const Item = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.2em ;
    width: 18%;
    height: 27em;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.5s;

    background: ${props => props.theme.card.background};
    box-shadow: ${props => props.theme.card.box_shadow};

img {
    height:14.6em;
    width: 100%;
    object-fit: cover;
}

    @media(max-width : 1500px) {
        width: 21%;
        height: 30em;
        
    } 

    @media(max-width : 1100px) {
        width: 28%;
        
    } 

    @media(max-width : 850px) {
        width: 42%;
        
    }


    @media(max-width : 600px) {
        width: 100%;
        height: 30em;
    }

`

export const Description = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    height: 100%;

span {
    display: flex;
    align-items: center;
    
    font-size: 1.3em;
    font-weight:400;
}

p{
    color: ${props => props.theme.colors.primary_details};
    font-size: 1.5em;
    font-weight: bold;
}

`

export const Options = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    

`

export const ItemLink = styled(Link)`

    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.colors.primary_text};
    transition: .3s;
    

:hover {
    color: ${props => props.theme.colors.primary_details};
}


`

export const WhatsApp = styled.a`

display: flex;
align-items: center;
border-radius: 15px;
color:black;
font-size: 1.3em;
text-decoration: none;
background-color: #25D366;
transition: all .2s;

:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 12px rgba(27, 27, 27, .5);

    }

    :active {
        transform: translateY(-1px);
    }

`

export const Email = styled(WhatsApp)`

color:white;

background-color: blue;

`
