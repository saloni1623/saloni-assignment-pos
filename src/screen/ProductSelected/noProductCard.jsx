import React from "react";
import styles from './styles.module.css'

const NoProductCard = () => {
    return(
        <div className={styles['no-product-container']} data-testid="noProductCard-component" >
            <div className={styles['no-product-text']}>THERE ARE NO PRODUCTS</div>
        </div>
    )
}

export default NoProductCard