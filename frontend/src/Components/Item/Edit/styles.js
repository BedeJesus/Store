import styled from "styled-components";

export const Container = styled.div`

    background-color: #2b2d42;
    color: whitesmoke;
    text-align: left;
    padding: 10%;
    align-content: center;
    margin: 2.5vh 7vh 7vh 7vh;
    border-radius: 40px;
    padding: 0.1vh 5vh 2vh 5vh;

`

export const Title = styled.h1`

   
        display: flex;
        font-size: 2.4rem;
        align-items: center;
    
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

export const Data = styled.div` 

   display: grid;
`



export const Label = styled.label` 

   font-size: 1.4rem;
`


export const Footer = styled.div` 

   display: flex;
   justify-content: space-evenly;

`


export const Button = styled.div`

    display: flex;
    height: 4rem;
    border-radius: 10px;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0 2em;


 :hover {

    background-color: red;
    color: white;
    cursor: pointer;

}



    
`


