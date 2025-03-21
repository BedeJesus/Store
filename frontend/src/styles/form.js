import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;

`
export const Box = styled.div`

border-radius: 15px;

background-color: ${props => props.theme.colors.primary_background};

box-shadow: ${props => props.theme.item.box_shadow};

    color: ${props => props.theme.colors.primary_text};;
    text-align: left;
    width: 90vw;
    max-width: 70em;
    margin:2em 0 ;
    padding: 1em 2.5em;

`

export const Header = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        
        
    }

    h2{
        font-size: 1.4rem;
        margin: .4em 0;
    }

    @media(max-width : 600px) {
        text-align: center;
    } 

    
`

export const Input = styled.input` 

    background-color: transparent;
    border: 0;
    border-bottom: ${props => props.theme.colors.primary_text} solid 2px ;
    color: ${props => props.theme.colors.primary_text};
    width: 100%;
    font-size: 1em;
    padding: 0.7% 0;

    @media(max-width : 400px) {
        /* max-width: 80%; */
    } 

    :focus,:hover{
        outline:none;
        border-bottom:#F5EA5A solid 2px ;
    }
`

export const Data = styled.div` 

   display: grid;
   width: 100%
`

export const Label = styled.label` 

   font-size: 1.4rem;
`

export const DivButton = styled.div`

    display: flex;
    justify-content: center;
`

export const Footer = styled.div` 

display: flex;
flex-direction: column;
align-items: center;

h6{
    font-size: 1.4em;
    margin-top: .4em ;
    text-align: center;
}

a{
    color: rgb(255, 56, 86) ;
    text-decoration: none;
    transition: .3s;
    :hover{
        color: ${props => props.theme.colors.primary_text};
    }
}
`
export const TwoButtons = styled.div` 

display: flex;
justify-content: space-evenly;

@media(max-width : 600px) {
    justify-content: space-around;
} 

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

    @media(max-width : 600px) {
        padding: .5em;
        font-size: 1.5em;
    } 




`


