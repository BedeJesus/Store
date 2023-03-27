import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.5% 0;
    width: 18%;
    height: 27em;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.5s;

    background: linear-gradient(145deg, #2e2e2e, #272727);
    box-shadow:  17px 17px 34px #151515,
             -17px -17px 34px #2b2b2b;

     @media(max-width : 1200px) {
        width: 30%;
        height: 26em;
    } 

    @media(max-width : 850px) {
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
    font-size: 1.4rem;
    font-weight: bold;
    color: whitesmoke;

`

export const Content = styled.div`

    flex:1;
    display: grid;
    grid-template-rows: 60% 33% 7%;
    padding: 0.5%;
    color: whitesmoke;

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



