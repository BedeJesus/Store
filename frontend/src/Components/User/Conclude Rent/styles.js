import styled from "styled-components";
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 5%;

  color: whitesmoke;


  h1{
    font-size: 2em;
    margin-bottom: .7em;
  }
  
`

export const Image = styled.img`

  width: 27em;
  height: 27em;
  border-radius: 10px;
  margin-top: 3em;
  border: 2px solid rgb(255, 56, 86);
`


export const Box = styled.div`

  display: flex;
  justify-content:space-around;
  padding-bottom: 2em;
  padding: 0 2em  2em 2em;
  margin-bottom: 2em;
  border-radius: 15px;
  background: #202020;

  box-shadow:  15px 15px 30px #171717,
              -15px -15px 30px #292929;

  @media(max-width : 1400px) {
        flex-direction: column;
        align-items: center;
    } 

`


export const Slider = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;


`

export const Data = styled.div` 

    max-width: 50em;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    h2{
      color:whitesmoke;
      margin: .5em 0 ;
    }

`

export const LeftArrow = styled(ArrowLeft)`

  color: whitesmoke;
  font-size: 2.5em;
  cursor: pointer;
  transition: .3s;

  :hover{
    
    color: rgb(255, 56, 86);
  }

`

export const RightArrow = styled(ArrowRight)`

  color: whitesmoke;
  font-size: 2.5em;
  cursor: pointer;
  transition: .3s;

  :hover{
    
    color: rgb(255, 56, 86);
  }

`



export const Arrows = styled.div`

 display: flex;
 justify-content: center;
 margin-top: 1em;

`


export const Button = styled.button`

 padding: .5em 2em;
 border-radius: 10px;
 
 background-color: rgb(255, 56, 86);
 font-size: 1.7rem;
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