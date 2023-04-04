import styled from "styled-components";

export const ItemCards = styled.div`

  display: flex;
  flex-wrap: wrap; 
  justify-content:flex-start;
  margin: 0 5%;

  
`

export const Content = styled.div`

color: ${props => props.theme.colors.primary_text};

h2{

  margin-bottom:1em;

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