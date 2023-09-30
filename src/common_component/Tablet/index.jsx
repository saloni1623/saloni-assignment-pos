import React from "react";
import styles from './styles.module.css'

const Tablet = ({ item, handleFunc = () => { } }) => {
    const { image, name, price, description } = item
    const [isHovered, setIsHovered] = React.useState(false);

    // function when mouse enters
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // function when mouse leave
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div onClick={() => handleFunc(item)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles['tablet-container']} >
            {/* Image showing */}
            <img src={image} className={styles['image-style']} />
            <div className={styles['tablet-item-box']}>
                <div className={styles['tablet-text']}>{name}</div>

                {/* details showing on hover */}
                {
                    isHovered ?
                        <>
                            <div className={styles['tablet-sub-text']}>Price: ₹ {price}</div>
                            <div className={styles['tablet-sub-text']}>Desc: {description}</div>
                        </>
                        : ''
                }
            </div>
        </div>
    )
}

export default Tablet