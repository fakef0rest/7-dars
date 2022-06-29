import { forwardRef } from 'react';
import './Input.css';



export const Input = forwardRef(({...props}, ref) => {
    return (
        <input ref={ref} {...props}/>
    )
})