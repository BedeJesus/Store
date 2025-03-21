import styled from "styled-components";

export const Container = styled.div`

  margin: 0 5%;

    h3{
        margin-left: auto;
        margin-right: auto;
        color:${props => props.theme.colors.primary_text};
    }

    h1{
      color: ${props => props.theme.colors.primary_text};
      margin-bottom: .5em;
    }

`

export const Filter = styled.div`

  display: flex;
  justify-content: space-between;
  height: 2em;
  margin: 0 1.5em 2em 1.5em;

  @media(max-width : 550px) {
       flex-direction:column;
       height: 4em;
    }

`


export const Items = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content:flex-start;
  
`

export const Input = styled.input`

    background-color: transparent;
    border-color: ${props => props.theme.colors.secundary_details};
    font-size: 1.5em;
    border-top: transparent ;
    border-right: transparent ;
    border-left: transparent ;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props => props.theme.colors.secundary_details}80 ;
        
    }

    &:focus {
        outline: none;
       color:${props => props.theme.colors.secundary_details};;
    }

    @media(max-width : 550px) {
       margin-bottom: .5em;
    }   
    
`