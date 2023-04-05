import styled from "styled-components";

export const Container = styled.ul`

    display: flex;
    flex-wrap: wrap;

    @media(max-width : 800px) {
    }

`


export const Button = styled.button`

 padding: .1em .5em;
 border-radius: 10px;
 background-color: rgb(255, 56, 86);
 font-size: 1.5rem;
 transition: all .3s ease;
 box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
 color: hsl(0, 0%, 100%);
 margin: 0 0 0 .5em;


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
