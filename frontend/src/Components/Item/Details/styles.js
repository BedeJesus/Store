import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 5%;
  color: white;

  h1{
    font-size: 2em;
    margin-bottom: .5em;
  }
  
`

export const Info = styled.div`

  display: flex;
  background-color: grey;
  justify-content:space-around;
  height: 37em;
`

export const Slider = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  img{
    margin-right: 2em;
  }

`

export const Data = styled.div` 

    width: 47em;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;



    h1 {
        margin-bottom: .5em;
    }

`

export const LongDescription = styled.span`

  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 1.1em;
  margin-bottom: 1em;

`

export const Price = styled.span`

    display: flex;
    font-size: 1.3em;
    justify-content: center;
    margin-bottom: .5em;

`

export const Arrow = styled.div`

  color: black;
  font-size: 2.5em;
  cursor: pointer;
  transition: .3s;

  :hover{
    color: rgb(255, 56, 86);
  }

`

export const Arrows = styled.div`

 display: flex;
 justify-content: center;

`

export const CreateCount = styled.span`

    display: flex;
    font-size: 1.6em;
    justify-content: center;

    a{
        text-decoration: none;
        
        :hover{
            color: red;
        }
    }

`

export const Button = styled.button`

 padding: .5em 2em;
 border-radius: 10px;
 
 background-color: rgb(255, 56, 86);
 font-size: 1.7rem;
 transition: all .3s ease;
 box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
 color: hsl(0, 0%, 100%);


 :hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
    cursor: pointer;
}

:active {
 box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
 transform: translateY(5px);
 transition: 50ms;
}

`