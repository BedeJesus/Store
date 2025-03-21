import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    margin: 1.3em 1%;
    width: 18%;
    height: 27em;
    padding: 5px 0;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.5s;

    background: ${props => props.theme.card.background};
    box-shadow: ${props => props.theme.card.box_shadow} ;

     @media(max-width : 1200px) {
        width: 31%;
        height: 26em;
    } 

    @media(max-width : 850px) {
        width: 47.5%;
        height: 25em;
    } 

    @media(max-width : 600px) {
        width: 47.5%;
        height: 30em;
    } 

    :hover {
        border: 1px solid ${props => props.theme.colors.secundary_details};
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
    color: ${props => props.theme.colors.primary_text};

`

export const Content = styled.div`

    flex:1;
    display: grid;
    grid-template-rows: 60% 33% 7%;
    padding: 0.5%;
    color: ${props => props.theme.colors.primary_text};

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
    font-size: 1.2em;
`



