import styled from "styled-components";

export const Container = styled.div`

    background-color: #2b2d42;
    color: whitesmoke;
    text-align: left;
    padding: 10%;
    align-content: center;
    margin: 2.5vh 7vh 7vh 7vh;
    border-radius: 40px;
    padding: 0.1vh 5vh 0vh 5vh;
`

export const Header = styled.div`

    h1{
        display: flex;
        font-size: 2.4rem;
        align-items: center;
    }

    h2{
        font-size: 1.4rem;
    }
`

export const Data = styled.div` 

   display: grid;
`

export const Input = styled.input` 

   background-color: transparent;
    border-radius: 5px;
    border-color: whitesmoke;
    color: white;
    padding: 0.7%;

    :focus{
        outline-color: yellow;
    }
`

export const Label = styled.label` 

   font-size: 1.4rem;
`

export const Footer = styled.div` 

    display: grid;
    grid-template-columns: 4% 1fr 1fr;
    grid-template-rows: repeat(3, 35%);

    button {
       grid-column: span 3;
       margin: 15px 0;
       border-radius: 10px;
       font-size: 1.4rem;
       background-color: red;
       color: white;
       font-weight: bold;
       transition: .3s;
       padding: 1em 0 ;
       display: flex;
       justify-content: center;
       align-items: center;

       :hover {

        background-color: white;
        color: #ef233c;
        cursor: pointer;

        }

    }

    h6 {
        grid-column: span 3;
        align-self: center;
        align-content: center;
        font-size: 1.4rem;
    }
`
