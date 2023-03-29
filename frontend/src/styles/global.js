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
  width: .8em;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.secundary_background}; 
  border-radius: 10px;
}


`

