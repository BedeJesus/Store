import styled from "styled-components";


export const Container = styled.div`

color: ${props => props.theme.colors.primary_text};
margin: 0 5%;

h2{
  margin-bottom:1em;
  :hover{
    
  }
}

h3{
  margin: auto;
  font-size: 1.5em;
  }

a {
  margin: 1em 0 2em 0;
  color: ${props => props.theme.colors.primary_details};
  text-decoration: none;
  transition: .3s;
  :hover{
   color: ${props => props.theme.colors.secundary_details};
  } 
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

export const ItemCards = styled.div`

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

