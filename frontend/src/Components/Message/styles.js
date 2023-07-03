import styled from "styled-components";

export const Container = styled.div`

  width: 60%;
  padding: 1em;
  border: 2px solid black;
  margin: 5em auto -5em;
  font-weight: bold;
  text-align: center;
  border-radius: 5px ;
  background-color: #daedda;
  border-color: #c3e6cb ;
  color: ${(props) => props.color};


`