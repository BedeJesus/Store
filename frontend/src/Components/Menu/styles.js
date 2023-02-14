import styled from "styled-components";

export const Container = styled.div`

h1 {
    display: flex;
    justify-content: center;
    color: black;
    font-size: 2.5em;
}

a,li{
    background-color:transparent;
    color: #B4A5A5;
    border: none;
    font-size: 30px ;
    text-decoration: none;
    list-style: none;
    transition: .3s;

    :hover{
        cursor: pointer;
        color: white;
    }

    @media(max-width : 650px) {
        font-size: 23px ;
    }
    
}

input{
    border: black;
    border-radius: 10px;
    height: 3.3vh;

}

`

export const Buttons = styled.div`

    height: 3em;
    display: flex;
    background-color: #2b2d42;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    border: solid 2px black;
    border-radius: 3px;

`