import styled from "styled-components";


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