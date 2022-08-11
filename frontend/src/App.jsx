import './App.css'
import React from "react";
import Menu from './Components/Menu/Menu'
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content/Content';
import Message from './Components/Message/Message';


import { UserProvider } from './context/UserContext'



const App = props => (

    <div>
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

