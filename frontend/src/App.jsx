import React from "react";
import GlobalStyle from '../src/styles/global'
import Menu from './Components/Menu/Menu'
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content/Content';
import Message from './Components/Message/Message';


import { UserProvider } from './context/UserContext'



const App = props => (

    <div>
        <GlobalStyle/>
        <Router>
            <UserProvider>
                <Menu />
                <Message/>
                <Content />
            </UserProvider>
        </Router>
    </div>
)

export default App

