import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    background-color: ${props =>props.theme.colors.secundary_background}E6;
    backdrop-filter: blur(5px) saturate(100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:1;

a{
    color: ${props => props.theme.colors.secundary_text};
    font-size: 30px ;
    text-decoration: none;
}

    margin-bottom: 1em;
`
export const Store = styled(Link)`

    display: flex;
    align-items:center;
    justify-content: space-between;
    border: none;
    font-size: 30px ;
    text-decoration: none;
    list-style: none;
    transition: .3s; 

    :hover {
        color: ${props => props.theme.colors.primary_text};
    }


`

export const Top = styled.div`

    height: 4.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5%;

`

export const MiddleButtons = styled.div`

    @media(max-width : 1100px) {
        display: none;
    }

`

export const Button = styled(Link)`

    margin: .5em;
    padding: .2em 1em;
    border-radius: 15px;

    transition: all .2s;
    display: inline-block;

    :hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 12px rgba(27, 27, 27, .5);
        color: ${props => props.theme.colors.primary_text};
    }

    :active {
        transform: translateY(-1px);
    }

`

