import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

  display: flex;
  margin: 0 5%;
  justify-content:space-around;
  color: ${props => props.theme.colors.primary_text};
  
`

export const Box = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:space-around;
  padding: 0 2em  2em 2em;
  margin: 2em;  
  border-radius: 15px;
  background: ${props => props.theme.item.background};
  box-shadow: ${props => props.theme.item.box_shadow};

  @media(max-width : 1400px) {
        flex-direction: column;
        align-items: center;
    } 

    p{
      font-size: 1.5em;
      margin-bottom: .5em;
    }

    h1{
    font-size: 2em;
    margin: .7em;
  }

  @media(max-width : 600px) {
    padding: 0;
    margin: 0;  
    } 

`

export const Buttons = styled.div`

  padding-left: 8em;
 

  @media(max-width : 1400px) {
    padding: 0;
    display: flex;
    justify-content: center;
    } 

  
`

export const Error = styled.div`

p{
  font-size:1.3em;
}
  
`

export const Button = styled.button`

 padding: .1em .5em;
 border-radius: 10px;
 margin: .3em 0;
 
 background-color: rgb(255, 56, 86);
 font-size: 1.3rem;
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

    @media(max-width : 600px) {
        padding: .5em;
        font-size: 1.5em;
    } 

`
