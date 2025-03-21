import styled from "styled-components";
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { Link } from "react-router-dom";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 5%;

  color: ${props => props.theme.colors.primary_text};


  h1{
    font-size: 2em;
    margin-bottom: .7em;
  }
  
`

export const Box = styled.div`

  display: flex;
  justify-content:space-around;
  padding-bottom: 2em;
  padding: 0 2em  2em 2em;
  margin-bottom: 2em;
  border-radius: 15px;
  background: ${props => props.theme.item.background};
  box-shadow: ${props => props.theme.item.box_shadow};

  @media(max-width : 1400px) {
        flex-direction: column;
        align-items: center;
    } 

`

export const Info = styled.div`

    
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 1.5em;
  
`

export const InfoItem = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const Slider = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const Image = styled.img`

  width: 27em;
  height: 27em;
  border-radius: 10px;
  margin-top: 3em;
  border: 2px solid ${props => props.theme.colors.primary_details};

  @media(max-width : 600px) {
    width: 20em;
    height: 20em;
    }

`

export const Data = styled.div` 

    max-width: 50em;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    h1 {
        margin-bottom: .5em;
        color: ${props => props.theme.colors.primary_details};
        
    }

    h2{
      color: ${props => props.theme.colors.primary_details};
    }

`

export const LongDescription = styled.span`

  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 1.1em;
  margin-bottom: 1em;

`

export const Price = styled.span`

  font-size: 1.3em;

`

export const Input = styled.input`

  font-size: 1.3em;
  width: 3em;
  background-color: transparent;
  color:${props => props.theme.colors.primary_text};
  border: solid 1px ${props => props.theme.colors.primary_text};;
  border-radius:10px ;
  text-align: center;

  :focus{
    outline: none;
  }


`

export const LeftArrow = styled(ArrowLeft)`

  color: ${props => props.theme.colors.primary_text};
  font-size: 2.5em;
  cursor: pointer;
  transition: .3s;

  :hover{
    
    color: ${props => props.theme.colors.secundary_details};
  }

`

export const RightArrow = styled(ArrowRight)`

  color: ${props => props.theme.colors.primary_text};
  font-size: 2.5em;
  cursor: pointer;
  transition: .3s;

  :hover{
    
    color: ${props => props.theme.colors.secundary_details};
  }

`

export const Arrows = styled.div`

 display: flex;
 justify-content: center;
 margin-top: 1em;

`

export const Highlight = styled(Link)`

 display: flex;
 padding-left:.1em; 
 padding-right:.1em; 
 border-radius: 10px;
  transition: .2s;
  text-decoration: none;
  background-color: rgb(255, 56, 86);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  justify-content: center; 
  
  :hover{
      color:${props => props.theme.colors.primary_text};
      box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }

  :active {
 box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
 transform: translateY(5px);
 transition: 50ms;
}

`

export const CreateCount = styled.span`

    display: flex;
    font-size: 1.6em;
    justify-content: center;    

    @media(max-width : 600px) {
      flex-direction: column;
    }

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