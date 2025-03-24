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

    @media(max-width : 600px) {
      padding:0;
      margin: 0;
    } 

    p{
      font-size: 1.5em;
      margin-bottom: .5em;
    }

    h1{
        font-size: 2em;
        margin: .7em;
    }

    h2{
        margin-bottom: .5em;
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.primary_details};
        transition: .3s;

        :hover{
            color: ${props => props.theme.colors.secundary_details};
        }
    }
  

`