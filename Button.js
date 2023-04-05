import React from 'react'
import "./Button.css"

const Button = ({text, color, size, type}) => {
    return (
        <button className={`btn ${color} ${size} ${type}`}>{text}</button>
    )
}

export default Button