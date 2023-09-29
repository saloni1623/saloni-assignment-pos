import React from "react";
import data from '../../assets/jsonData.json';
import Tablet from "../../common_component/Tablet";
import styles from './styles.module.css'

const ProductListing = () => {

    return (
        <div className={styles['prod-list-container']}>
            <div className={styles['prod-list-row']}>
                {/* Data Listing */}
                {
                    data.map((item) => (
                        <Tablet key={Math.random()} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductListing