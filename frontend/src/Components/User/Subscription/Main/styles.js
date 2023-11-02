import styled from "styled-components";


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
  padding-bottom: 2em;
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

`

export const Buttons = styled.div`

  padding-left: 8em;
 

  @media(max-width : 1400px) {
    padding: 0;
    display: flex;
    justify-content: center;
    } 

  
`