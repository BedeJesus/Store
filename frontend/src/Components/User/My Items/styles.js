import styled from "styled-components";

export const Container = styled.div`

    display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;

`

export const Content = styled.div`

a {
  color: black;
  text-decoration: none;
  font-size: 25px;
  transition: .3s;

  :hover{
    color:#2b2d42;
  }
  
}

`