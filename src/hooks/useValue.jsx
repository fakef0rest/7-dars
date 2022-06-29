import { useContext } from "react";
import { ValueContext } from "../contexts/Value";

export const useValue = () => {
    const {number, setNumber} = useContext(ValueContext);

    return {number, setNumber}
}