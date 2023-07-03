import React, { useState } from "react";
import GlobalStyle from '../src/styles/global'
import Menu from './Components/Menu/Menu'
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content/Content';
import Message from './Components/Message/Message';
import { UserProvider } from './context/UserContext'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ThemeProvider } from 'styled-components'

function App() {

    const [theme, setTheme] = useState(dark)

    const toggleTheme = () => {
        setTheme(theme === dark ? light : dark)
    }

    return (
        
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <UserProvider>
                    <Menu toggleTheme={toggleTheme} />
                    <Message />
                    <Content />
                </UserProvider>
            </Router>
        </ThemeProvider>
    )
}

export default App

