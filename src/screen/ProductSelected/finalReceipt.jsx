import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import { useSelector } from "react-redux";

const FinalReceipt = ({ taxes }) => {
    const selected_product = useSelector(state => state.selected_product)
    const [total, setTotal] = useState({ quant: 0, sum: 0 })

    // function to calculate total result
    const getTotalResult = () => {
        let quant = 0
        let sum = 0

        selected_product.forEach(element => {
            quant += element.quantity
            sum += element.quantity * Number(element.price)
        });

        sum += (taxes.discount / 100 * sum) + (taxes.vat / 100 * sum)

        setTotal({ quant: quant, sum: sum })

    }

    // formating current date
    const currentDate = new Date()
    const formattedDateTime = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    useEffect(() => {
        getTotalResult()
    }, [selected_product])

    return (
        <div className={styles["modal-container"]}>
            <div className={styles["head-style"]}>Receipt</div>
            <div className={styles["subhead-style"]}>Sale No: 00102</div>
            <div className={styles["body-container-style"]}>
                <div className={styles["date-elem"]}>Date: {formattedDateTime}</div>
                <div className={styles["table-head-style"]}>
                    <div className={styles["table-index"]}>#</div>
                    <div className={styles["table-product"]}>products</div>
                    <div className={styles["table-quantity"]}>Quantity</div>
                    <div className={styles["table-sub-total"]}>SubTotal</div>
                </div>
                <div className={styles["table-content-container"]}>
                    {
                        selected_product.map((elem, ind) => (
                            <div key={Math.random()} className={styles["table-body-style"]}>
                                <div className={styles["table-index"]}>{ind + 1}</div>
                                <div className={styles["table-product"]}>{elem.name}</div>
                                <div className={styles["table-quantity"]}>{elem.quantity}</div>
                                <div className={styles["table-sub-total"]}>{elem.quantity * Number(elem.price)}</div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles["table-total-style"]}>
                    <div className={styles["total-item"]}>
                        <div className={styles["table-total-item"]}>Total Items</div>
                        <div className={styles["table-total-item"]}>{total.quant}</div>
                    </div>
                    <div className={styles["total-item"]}>
                        <div className={styles["table-total-item"]}>Total</div>
                        <div className={styles["table-total-item"]}>{total.sum.toFixed(2)} INR</div>
                    </div>
                </div>
                <div className={styles["discount-box"]}>
                    <div className={styles["total-item"]}>
                        <div className={styles["table-total-item"]}>Discount</div>
                        <div className={styles["table-total-item"]}>{taxes.discount}%</div>
                    </div>
                </div>
                <div className={styles["discount-box"]}>
                    <div className={styles["total-item"]}>
                        <div className={styles["table-total-item"]}>VAT</div>
                        <div className={styles["table-total-item"]}>{taxes.vat}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalReceipt