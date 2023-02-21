import styled from "styled-components";

export const Container = styled.div`

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 1.5%;
    width: 22%;
    height: 27em;
    padding: 5px 0;


    transition: all 0.5s;
    background: linear-gradient(145deg, #2e2e2e, #272727);
    
    box-shadow:  19px 19px 38px #151515,
             -19px -19px 38px #2b2b2b;

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

    :hover {
        border: 1px solid #F5EA5A;
        transform: scale(1.05);
        cursor: pointer;
    }

    :active {
        transform: scale(0.95) rotateZ(2deg);
    }

    img{
        grid-row-start:1 ;
        grid-row-end:2 ;
        height:14.6em;
        width: 100%;
        object-fit: cover;
    }

`

export const Title = styled.div`

    display: flex;
    justify-content: center;
    color: rgb(244, 211, 211);
    font-size: 1.4rem;
    font-weight: bold;

`

export const Content = styled.div`

    flex:1;
    display: grid;
    grid-template-rows: 60% 33% 7%;
    color: white;
    padding: 0.5%;

`

export const Description = styled.div`

    display: flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    
   
`
export const Status = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 5%;
    font-size: 1.5em;
`



