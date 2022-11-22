import { Component } from "react";
import Gallery from "./Gallery";
import styles from './ProductGallery.module.css';
import ProductMainImage from "./ProductMainImage";
class ProductGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.gallery[0]
        }
    }

    changeMainIMageHandler(selectedImage) {
        this.setState({ mainImage: selectedImage })
    }

    render() {
        const { gallery } = this.props;
        const { mainImage } = this.state
        return (
            <section className={styles['gallery-container']}>
                <Gallery gallery={gallery} mainImage={mainImage} changeMainIMageHandler={this.changeMainIMageHandler.bind(this)} />
                <ProductMainImage mainImage={mainImage} />
            </section>
        )
    }
}

export default ProductGallery;