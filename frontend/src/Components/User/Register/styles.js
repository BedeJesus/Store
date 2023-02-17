import styled from "styled-components";

export const Container = styled.div`

border-radius: 15px;
background: #202020;
box-shadow:  15px 15px 30px #171717,
             -15px -15px 30px #292929;

    color: whitesmoke;
    text-align: left;
    width: 90vw;
    max-width: 70em;
    margin:2em 0 ;
    padding: 1em 2.5em;


`

export const Header = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 2.4rem;
    }

    h2{
        font-size: 1.4rem;
        margin: .4em 0;
    }
`

export const Input = styled.input` 

    background-color: transparent;
    border: 0;
    border-bottom:whitesmoke solid 2px ;
    color: white;
    font-size: 1em;
    padding: 0.7%;

    :focus,:hover{
        outline:none;
        border-bottom:yellow solid 2px ;
    }
`

export const Data = styled.div` 

   display: grid;
`

export const Label = styled.label` 

   font-size: 1.4rem;
`

export const DivButton = styled.div`

    display: flex;
    justify-content: center;
`

export const Teste = styled.div`

    display: flex;
    justify-content: center;

`

export const Button = styled.button`

 padding: .5em 2em;
 border-radius: 10px;
 margin: .3em 0;
 

 background-color: rgb(255, 56, 86);
 font-size: 2rem;
 transition: all .3s ease;
 box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
 color: hsl(0, 0%, 100%);


 :hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
    cursor: pointer;
}

:active {
 box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
 transform: translateY(5px);
 transition: 50ms;
}


   
`


