import React from "react";
import styles from './styles.module.css'

const TableHead = () => {
    return(
        <div className={styles['table-head-container']}>
            <div className={styles['product-head']}>PRODUCTS</div>
            <div className={styles['price-head']}>PRICE</div>
            <div className={styles['quantity-head']}>QUANTITY</div>
            <div className={styles['total-head']}>TOTAL</div>
        </div>
    )
}

export default TableHead