import { useEffect } from 'react';
import './Modal.css';

export const Modal = ({children, open, setOpen, handleOk, okText = 'Save'}) => {
    const handleCloseModal = () => {
        setOpen(false);
    }

    const handleCloseBackground = evt => {
        if (evt.target.matches('.modal')) {
            handleCloseModal();
        }
    }

    useEffect(() => {
        const handleCloseKey = evt => {
            if (evt.keyCode === 27) {
                handleCloseModal();
            }
        }
    
        window.addEventListener('keyup', handleCloseKey);

        return () => {
            window.removeEventListener('keyup', handleCloseKey);
        }
    }, [])

    return (
        <div onClick={handleCloseBackground} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Modal title</h4>
                    <button onClick={handleCloseModal}>&times;</button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <button onClick={handleCloseModal}>Cancel</button>
                    <button onClick={handleOk}>{okText}</button>
                </div>
            </div>
        </div>
    )
}