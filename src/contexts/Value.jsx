import { createContext, useState } from 'react'

export const ValueContext = createContext()

export const ValueProvider = ({children}) => {
    const localNumber = localStorage.getItem('number')
    const [number, setNumber] = useState(localNumber ? Number(localNumber) : 1)
    
    return <ValueContext.Provider value={{number, setNumber}}>{children}</ValueContext.Provider>
}