import { Component } from "react";
import styles from './ProductMainImage.module.css'
class ProductMainImage extends Component {
    render() {
        const { mainImage } = this.props
        return (
            <div className={styles['main-image-container']}>
                <div style={{ backgroundImage: `url(${mainImage})` }} className={styles['main-image']} />
            </div>
        )
    }
}

export default ProductMainImage;