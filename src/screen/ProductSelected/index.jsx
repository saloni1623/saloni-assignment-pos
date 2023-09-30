import React from "react";
import styles from './styles.module.css'
import TableHead from "./tableHead";
import NoProductCard from "./noProductCard";
import BillCard from "./billCard";
import CommonButton from "../../common_component/CommonButton";

const ProductSelected = () => {
    return (
        <div className={styles['selected-list-container']}>
            {/* heading */}
            <TableHead />

            {/* body element */}
            <div className={styles['content-box']}>
                <NoProductCard />
            </div>

            {/* billcard */}
            <div className={styles['bill-box']}>
                <BillCard />
            </div>
            {/* buttons */}
            <div className={styles['btn-box']}>
                <CommonButton btnText="cancel sale" customStyle={{ background: "#e74c3c" }} />
                <CommonButton btnText="process sale" customStyle={{ background: "#2ecc71" }} />
            </div>
        </div>
    )
}

export default ProductSelected