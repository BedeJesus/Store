import styled from "styled-components";

export const Container = styled.div`

    border-radius: 10px;
    overflow: hidden;
    border: 3px solid;
    display: flex;
    flex-direction: column;
    margin: 1.5%;
    width: 22%;
    height: 27em;
    background-color:#ef233c;
    border-color: #ef233c;

    @media(max-width : 900px) {
        margin: 1.5%;
        width: 30%;
        height: 26em;
    }

    @media(max-width : 650px) {
        
        margin: 1.5%;
        width: 47%;
        height: 25em;
    }



    img{
        grid-row-start:1 ;
        grid-row-end:2 ;
        height:11em;
        width: 100%;
    }

`

export const Title = styled.div`

    padding: 5px 0px;
    display: flex;
    justify-content: center;
    color: rgb(244, 211, 211);
    font-size: 1.4rem;
    font-weight: bold;

`

export const Content = styled.div`

    flex:1;
    display: grid;
    grid-template-rows: 48% 36% 6% 10%;
    background-color: white;
    color: black;
    padding: 0.5%;

`

export const Description = styled.div`

    display: flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
`
export const Price = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    padding-top: 1%;
    margin-bottom: 5%;
`

export const CardButton = styled.div`

    
   a{

    display: flex;
    flex-direction: column;
    justify-content: center;   
    text-decoration: none;
    font-weight: bold;
    color:white;
    background-color: #d90429;
    padding: 1.5% 4%  ;
    border: black 2px solid;
    border-radius:10px ;
    transition: .4s;

    :hover{
        background-color: #2b2d42;
    }
    
   }
`


