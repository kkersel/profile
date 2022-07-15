import React from 'react'
import './Button.css'

export const Button = ({title}) => {
    return (
        <button className='button' disabled>
            <p>{title}</p>
        </button>
    )
}

export default Button;
