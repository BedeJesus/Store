import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  justify-content: space-around;


`

export const Data = styled.div` 

    margin-left: 5%;

    h1 {
        font-size: 2em;
    }

`

export const LongDescription = styled.span`

  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.3em;



`

export const Price = styled.span`

    display: flex;
    font-size: 1.3em;
    justify-content: center;

`

export const Button = styled.button`

  font-size: 1.3em;
  font-weight: bold;
  border-radius: 10px;
  background-color: red;
  color: white;
  transition: .3s;
  padding: 2% 4% 2% 4%;

  :hover {
    cursor: pointer;
    background-color: white;
    color: red;
}

`