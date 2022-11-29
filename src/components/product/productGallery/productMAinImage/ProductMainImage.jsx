//React Component
import { Component } from "react";

//CSS
import styles from './ProductMainImage.module.css';
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