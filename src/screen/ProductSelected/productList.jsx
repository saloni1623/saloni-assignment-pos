import React from "react";
import { useSelector } from "react-redux";
import ListItem from "../../common_component/ListItem";
import styles from './styles.module.css'

const ProductList = () => {
    const selected_product = useSelector(state => state.selected_product)

    return (
        <div className={styles['list-container']}>
            {
                selected_product.map((elem) => (
                    <ListItem key={Math.random()} elem={elem} />
                ))
            }
        </div>
    )
}

export default ProductList