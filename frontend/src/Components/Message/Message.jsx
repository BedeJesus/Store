import { useState, useEffect } from 'react'
import bus from '../../utils/bus'

import {Container} from './styles'

export default function Message() {

    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        bus.addListener('flash', ({ message, type }) => {
            setVisibility(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisibility(false)
            }, 3000) 
        })

    })

    return (
        visibility && (

            
            <Container color={type==='sucess'? 'green': 'red'}>
                {message} 
            </Container>

        )
    )
}






