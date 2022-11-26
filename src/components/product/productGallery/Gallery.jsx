import { Component } from "react";
import styles from './Gallery.module.css'

class Gallery extends Component {

    render() {
        const { gallery, mainImage, changeMainIMageHandler } = this.props;
        return (
            <div className={styles['product-images']}>
                {gallery?.map(img => (
                    <div key={img} style={{ backgroundImage: `url(${img})` }}
                        className={`${styles['gallery-image']} ${img === mainImage && styles.active}`}
                        onClick={() => changeMainIMageHandler(img)}
                    />
                ))}
            </div>
        )
    }
}

export default Gallery;