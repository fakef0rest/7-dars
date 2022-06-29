import { useEffect } from "react";
import { useValue } from "../../hooks/useValue";

export const Button = () => {
    const { number, setNumber } = useValue();

    const handleToggleSum = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        localStorage.setItem('number', number);
    }, [number])
    
    return (
        <button onClick={handleToggleSum}>
            Increment
        </button>
    )
}