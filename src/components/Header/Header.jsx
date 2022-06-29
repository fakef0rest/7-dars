import './Header.css'
import { Button } from '../Button';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleChangeTheme = (evt) => {
        setTheme(evt.target.value)
        localStorage.setItem('theme', evt.target.value)
    }
    return (
        <header className={theme}>
            <h1>Header</h1>
            <select defaultValue={theme} onChange={evt => handleChangeTheme(evt)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <Button />
        </header> 
    )
}