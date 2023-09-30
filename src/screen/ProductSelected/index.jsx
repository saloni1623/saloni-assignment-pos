import React from "react";
import styles from './styles.module.css'
import TableHead from "./tableHead";
import NoProductCard from "./noProductCard";
import BillCard from "./billCard";
import CommonButton from "../../common_component/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./productList";
import ModalComponent from "../../common_component/ModalComponent";
import FinalReceipt from "./finalReceipt";
import { addProduct } from "../../assets/redux/actions";

const ProductSelected = () => {
    const selected_product = useSelector(state => state.selected_product)
    const [taxes, setTaxes] = React.useState({ vat: 0, discount: 0 })
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = React.useState(false)

    // function to clear all selected items
    const ClearItems = () => {
        dispatch(addProduct([]))
    }

    // Function to show final receipt
    const showModal = () => {
        if(selected_product.length){
            setModalOpen(true)
        }
    }

    return (
        <div className={styles['selected-list-container']}>
            {/* heading */}
            <TableHead />

            {/* body element */}
            <div className={styles['content-box']}>
                {
                    selected_product.length ? <ProductList /> : <NoProductCard />
                }
            </div>

            {/* billcard */}
            <div className={styles['bill-box']}>
                <BillCard taxes={taxes} setTaxes={setTaxes} />
            </div>
            {/* buttons */}
            <div className={styles['btn-box']}>
                <CommonButton handleFunc={ClearItems} btnText="cancel sale" customStyle={{ background: "#e74c3c" }} />
                <CommonButton handleFunc={showModal} btnText="process sale" customStyle={{ background: "#2ecc71" }} />
            </div>
            
            {/* Receipt Modal */}
            <ModalComponent isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <FinalReceipt taxes={taxes} />
            </ModalComponent>
        </div>
    )
}

export default ProductSelected