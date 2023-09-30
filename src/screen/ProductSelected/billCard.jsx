import React, { useEffect } from "react";
import styles from './styles.module.css'
import { useSelector } from "react-redux";

const BillCard = ({taxes, setTaxes}) => {
    const selected_product = useSelector(state => state.selected_product)
    const [totalQaunt, setTotalQuant] = React.useState(0)
    const [subTotal, setSubTotal] = React.useState(0)
    

    // function to handle inputs
    const handleInput = (e) => {
        setTaxes(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // Function to add subtotal
    function addElements() {
        let sum = 0
        let quant = 0

        selected_product.forEach(element => {
            sum += Number(element.price) * element.quantity
            quant += element.quantity
        });

        setTotalQuant(quant)
        setSubTotal(sum)
    }

    useEffect(() => {
        addElements()
    }, [selected_product])

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
                    <div>{subTotal.toFixed(2)} INR</div>
                    <div>{totalQaunt} items</div>
                </div>
                <div className={styles['value-element']}>
                    <span>
                        <input name="vat" value={taxes.vat} onChange={handleInput} className={styles['input-element']} />%
                    </span>
                    <div>{(taxes.vat / 100 * subTotal).toFixed(2)} INR</div>
                </div>
                <div className={styles['value-element']}>
                    <span>
                        <input name="discount" value={taxes.discount} onChange={handleInput} className={styles['input-element']} />%
                    </span>
                    <div>{(taxes.discount / 100 * subTotal).toFixed(2)} INR</div>
                </div>
                <div className={styles['value-element']}>{(subTotal + taxes.vat / 100 * subTotal + taxes.discount / 100 * subTotal).toFixed(2)} INR</div>
            </div>
        </div>
    )
}

export default BillCard