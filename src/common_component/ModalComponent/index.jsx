import React from 'react';
import styles from './styles.module.css';

const ModalComponent = ({ isOpen, onClose = () => { }, children }) => {
    const modalStyle = {
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div className={styles["modal"]} style={modalStyle}>
            <div className={styles["modal-content"]}>
                {children}
                <div className={styles['close-btn-container']}>
                    <button className={styles["modal-close-btn"]} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
