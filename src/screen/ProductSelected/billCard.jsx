import React from "react";
import styles from './styles.module.css'

const BillCard = () => {
    return (
        <div className={styles['bill-card-container']}>
            <div className={styles['bill-card-topic']}>
                <div className={styles['card-element']}>SubTotal</div>
                <div className={styles['card-element']}>VAT tax</div>
                <div className={styles['card-element']}>Discount</div>
                <div className={styles['card-element']}>Total</div>
            </div>
            <div className={styles['bill-card-value']}>
                <div className={styles['value-element']}>
                    <div>elemn</div>
                    <div>elemn</div>
                </div>
                <div className={styles['value-element']}>
                    <input className={styles['input-element']} />
                    <div>elemn</div>
                </div>
                <div className={styles['value-element']}>
                    <input className={styles['input-element']} />
                    <div>elemn</div>
                </div>
                <div className={styles['value-element']}>Total</div>
            </div>
        </div>
    )
}

export default BillCard