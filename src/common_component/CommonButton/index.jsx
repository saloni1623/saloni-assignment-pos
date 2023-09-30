import React from "react";
import styles from './styles.module.css'

const CommonButton = ({ btnText, handleFunc = () => { }, customStyle = {} }) => {
    return (
        <div className={styles["btn-box"]} onClick={handleFunc} style={customStyle} data-testid="CommonButton-component" >
            <div className={styles["btn-txt"]}>
                {btnText}
            </div>
        </div>
    )
}

export default CommonButton