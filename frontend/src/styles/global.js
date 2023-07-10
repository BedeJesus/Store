import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme.colors.primary_background}; 
    
}

::-webkit-scrollbar {
  width: .5em;
  
}

::-webkit-scrollbar-track {
  background-image: linear-gradient(to bottom, ${props => props.theme.colors.secundary_background}E6 , ${props => props.theme.colors.secundary_background}E6 4.5em, transparent 4.5em);
}

::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.secundary_background}E6; 
  border-radius: 10px;
}


`

