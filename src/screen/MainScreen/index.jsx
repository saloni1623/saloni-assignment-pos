import React from "react";
import ProductSelected from "../ProductSelected";
import ProductListing from "../ProductListing";
import styles from './styles.module.css'

const MainScreen = () => {
    return (
        <div className={styles['main-container']} >
            {/* Product Selected Component */}
            <ProductSelected />

            {/* Product Listing Component */}
            <ProductListing />
        </div>
    )
}

export default MainScreen