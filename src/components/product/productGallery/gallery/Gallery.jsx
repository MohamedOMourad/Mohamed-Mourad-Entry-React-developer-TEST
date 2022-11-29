//React Component
import { Component } from "react";

//CSS
import styles from './Gallery.module.css';

class Gallery extends Component {
    componentDidMount() {
        const { mainImage, changeMainIMageHandler } = this.props;
        changeMainIMageHandler(mainImage)
    }
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