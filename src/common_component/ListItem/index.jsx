import React from "react";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../assets/redux/actions";

const ListItem = ({ elem }) => {
    const { image, name, price, description, quantity } = elem
    const selected_product = useSelector(state => state.selected_product)
    const dispatch = useDispatch()

    // function to delete item
    const handleDelete = () => {
        let filteredData = selected_product.filter((el) => (el.id != elem.id))
        dispatch(addProduct(filteredData))
    }

    // function to increase quantity
    const increaseElem = () => {
        let index = 0

        // finding the position of the element
        let prev = selected_product.filter((el, ind) => {
            if (el.id === elem.id) {
                index = ind
                return true
            }
        })[0]

        let filterOutData = selected_product.filter((el) => (el.id != elem.id))

        prev = { ...prev, ["quantity"]: prev.quantity + 1 }

        filterOutData.splice(index, 0, prev)

        dispatch(addProduct(filterOutData))
    }

    // Function to decrease quantity
    const decreaseElem = () => {
        let index = 0
        let prev = selected_product.filter((el, ind) => {
            if (el.id === elem.id) {
                index = ind
                return true
            }
        })[0]

        let filterOutData = selected_product.filter((el) => (el.id != elem.id))

        if (prev.quantity != 1) {
            prev = { ...prev, ["quantity"]: prev.quantity - 1 }
            filterOutData.splice(index, 0, prev)
            dispatch(addProduct(filterOutData))
        } else {
            dispatch(addProduct(filterOutData))
        }
    }



    return (
        <div className={styles['list-card-container']}>
            <div onClick={handleDelete} className={styles['delete-box']}>✖</div>
            <div className={styles['name-colm']}>{name}</div>
            <div className={styles['price-colm']}>{price}</div>
            <div className={styles['quant-colm']}>
                <div className={styles['action-btn-box']} onClick={decreaseElem}>➖</div>
                <div className={styles['value-box']}>{quantity}</div>
                <div className={styles['action-btn-box']} onClick={increaseElem}>➕</div>
            </div>
            <div className={styles['amount-colm']}>{Number(price) * quantity}</div>
        </div>
    )
}

export default ListItem