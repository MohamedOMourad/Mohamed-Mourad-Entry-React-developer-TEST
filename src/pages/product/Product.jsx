import { Component } from "react";
import ProductGallery from "../../components/product/productGallery/ProductGallery";
import ProductDescription from '../../components/product/productDescription/ProductDescription';

import { getProduct } from "../../utils/graphql";

import { withRouter } from "react-router-dom";

import styles from './Product.module.css';

import { connect } from "react-redux";
import { storProduct } from '../../redux/features/product/productSlice';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }


    componentDidMount() {
        (async () => {
            const { id } = this?.props?.match?.params;
            const product = await getProduct(id);
            this.setState({ product })
        })()
    }

    render() {
        const { product } = this.state;
        return product.id ?
            (
                <main className={styles.main}>
                    <ProductGallery product={product} />
                    <ProductDescription product={product} />
                </main>
            ) :
            (<p>Loading...</p>)
    }
}

export default withRouter(Product);