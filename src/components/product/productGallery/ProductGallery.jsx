//React Component
import { Component } from "react";
import Gallery from "./gallery/Gallery";
import ProductMainImage from "./productMAinImage/ProductMainImage";

//CSS
import styles from './ProductGallery.module.css';


class ProductGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.product.gallery[0]
        }
    }

    changeMainIMageHandler(selectedImage) {
        this.setState({ mainImage: selectedImage })
    }

    render() {
        const { gallery } = this.props.product;
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