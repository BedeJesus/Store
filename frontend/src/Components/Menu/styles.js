import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`

    background-color:#3d3d3d;

a{
    color: #B4A5A5;
    font-size: 30px ;
    text-decoration: none;

    @media(max-width : 650px) {
        font-size: 23px ;
    }
    
}
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
    margin-left: 5%;
    margin-right: 5%;

`

export const Button = styled(Link)`

    margin: .5em;
    padding: .2em 1em;
    border-radius: 15px;

    transition: all .2s;
    display: inline-block;
    position: relative;

    :hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 15px rgba(27, 27, 27, .5);
        color: white;
    }

    :active {
        transform: translateY(-1px);
    }

`

