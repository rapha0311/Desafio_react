import React from 'react'
import './paragrafo.css'
import './capslock'
import CapsLock from './capslock'

const Paragrafo = ({props, color}) => {
    return (
        <div className = 'paragrafo' style={{ backgroundColor: color }}>
        <p><CapsLock paragrafo = "texto qualquer"/></p>
        </div>
        
    )
}

Paragrafo.defaultProps = {
    color:  'green'
}

export default Paragrafo