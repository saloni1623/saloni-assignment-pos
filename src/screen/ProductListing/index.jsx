import React from "react";
import data from '../../assets/jsonData.json';
import Tablet from "../../common_component/Tablet";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../assets/redux/actions";

const ProductListing = () => {
    const selected_product = useSelector(state => state.selected_product)
    const dispatch = useDispatch()

    // function to add data
    const handleAddProduct = (item) => {
        let index = 0
        // finding prev stored item
        let prevData = selected_product.filter((el, ind) => {
            if (el.id === item.id) {
                index = ind
                return true
            }
        })

        // block is element is present
        if (prevData.length) {
            let prev = prevData[0]

            // increasing the quantity
            prev = { ...prev, ['quantity']: prev.quantity + 1 }

            // filtering out data without the elemnt
            var arrElem = selected_product.filter((el) => (el.id !== item.id))

            arrElem.splice(index, 0, prev)

            dispatch(addProduct(arrElem))
        } else {
            let selItem = item
            selItem.quantity = 1
            dispatch(addProduct([...selected_product, selItem]))
        }
    }

    return (
        <div className={styles['prod-list-container']}>
            <div className={styles['prod-list-row']}>
                {/* Data Listing */}
                {
                    data.map((item) => (
                        <Tablet key={Math.random()} item={item} handleFunc={handleAddProduct} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductListing