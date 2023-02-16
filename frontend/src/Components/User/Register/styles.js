import styled from "styled-components";

export const Container = styled.div`

border-radius: 32px;
background: #202020;
box-shadow:  30px 30px 60px #131313,
             -30px -30px 60px #2d2d2d;
   
    color: whitesmoke;
    text-align: left;
    padding: 10%;
    align-content: center;
    margin: 2.5vh 7vh 7vh 7vh;
    border: yellow solid 2px;
    padding: 0.1vh 5vh 2vh 5vh;

`

export const Header = styled.div`

    h1{
        display: flex;
        font-size: 2.4rem;
        align-items: center;
        margin: .4em 0;
    }

    h2{
        font-size: 1.4rem;
        margin: .4em 0;
    }
`

export const Input = styled.input` 

    background-color: transparent;
    border: 0;
    border-bottom:whitesmoke solid 1px ;
    color: white;
    padding: 0.7%;

    :focus{
        outline:none;
        border-bottom:yellow solid 3px ;
    }
`

export const Data = styled.div` 

   display: grid;
`

export const Label = styled.label` 

   font-size: 1.4rem;
`

export const Button = styled.div`

    display: flex;
    height: 4rem;
    border-radius: 10px;
    font-size: 2rem;
    justify-content: center;
    align-items: center;

 :hover {
    background-color: red;
    color: white;
    cursor: pointer;
}

`

export const NewButton = styled.div`

 padding: 17px 40px;
 border-radius: 10px;
 

 display: flex;
 justify-content: center;
 align-items: center;
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


