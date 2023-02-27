import styled from "styled-components";

export const ItemCards = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin: 0 5%;
`

export const Content = styled.div`

color: white;

a {
  text-decoration: none;
  color: red;
  font-size: 25px;
  transition: .3s;

  :hover{
    color:yellow;
  }
  
}

`