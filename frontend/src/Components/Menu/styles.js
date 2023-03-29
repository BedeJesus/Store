import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    background-color:${props => props.theme.colors.secundary_background};

a{
    color: ${props => props.theme.colors.secundary_text};
    font-size: 30px ;
    text-decoration: none;
    
}

margin-bottom: 1em;
`
export const Store = styled(Link)`

    border: none;
    font-size: 30px ;
    text-decoration: none;
    list-style: none;
    transition: .3s;
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

export const Toggle = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7em;
    color:${props => props.theme.colors.secundary_text}; ;

`

export const Button = styled(Link)`

    margin: .5em;
    padding: .2em 1em;
    border-radius: 15px;

    transition: all .2s;
    display: inline-block;

    :hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 15px rgba(27, 27, 27, .5);
        color: ${props => props.theme.colors.primary_text};
    }

    :active {
        transform: translateY(-1px);
    }

`

