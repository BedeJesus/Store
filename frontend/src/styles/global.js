import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
}

body{
    background-color: #202020; 
    
}

::-webkit-scrollbar {
  width: .8em;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #3d3d3d;
  border-radius: 10px;
}


`

