import styled from "styled-components";

export const Container = styled.div`

  margin: 0 5%;

    h3{
        margin-left: auto;
        margin-right: auto;
    }

    h1{
      color: white;
      margin-bottom: .5em;
    }

`

export const Filter = styled.div`

display: flex;
justify-content: space-between;
height: 2em;
margin-bottom: 2em;

`


export const Items = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;


`

export const Input = styled.input`

    
    background-color: transparent;
    border-color: yellow;
    font-size: 1.5em;
    padding-left: 1%;
    border-top: transparent ;
    border-right: transparent ;
    border-left: transparent ;

    ::placeholder,
    ::-webkit-input-placeholder {
        color:rgba(245,234,90,.5);
        
    }

    &:focus {
        outline: none;
       color:rgb(245,234,90);
    }

    @media(max-width : 800px) {
       margin:2em 0;
    }
    
`