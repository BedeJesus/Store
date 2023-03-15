import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 5%;

  color: whitesmoke;


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
  background: #202020;

  box-shadow:  15px 15px 30px #171717,
              -15px -15px 30px #292929;

  @media(max-width : 1400px) {
        flex-direction: column;
        align-items: center;
    } 

`

export const Info = styled.div`

    
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1.5em;
  
`

export const InfoItem = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const Slider = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  img{
    
    margin-right: 2em;
    border: 2px solid red;
  
  }

`

export const Data = styled.div` 

    max-width: 50em;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    h1 {
        margin-bottom: .5em;
        color:rgb(255, 56, 86);
        
    }

    h2{
      color:rgb(255, 56, 86);
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

  font-size: 1.3em;

`

export const Input = styled.input`

  font-size: 1.3em;
  width: 3em;
  background-color: transparent;
  color: whitesmoke;
  border: solid 1px whitesmoke;
  border-radius:10px ;
  text-align: center;

  :focus{
    outline: none;
  }


`

export const Arrow = styled.div`

  color: whitesmoke;
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
 margin-top: 1em;

`

export const CreateCount = styled.span`

    display: flex;
    font-size: 1.6em;
    justify-content: center;
    

    a{
      transition: .2s;
        text-decoration: none;
        color: rgb(255, 56, 86);
        
        :hover{
            color: whitesmoke;
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