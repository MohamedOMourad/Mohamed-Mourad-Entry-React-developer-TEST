import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getProduct } from "../../utils/graphql";
import styles from './Product.module.css';
import ProductGallery from "../../components/product/productGallery/ProductGallery";
import ProductDescription from "../../components/product/productDescription/ProductDescription";
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
        return product ?
            (
                <main className={styles.main}>
                    <ProductGallery product={product} />
                    <ProductDescription product={product} />
                    <Link to='/'>ffffffffffffffffff</Link>
                </main>
            ) :
            (<p>Loading...</p>)
    }
}

export default withRouter(Product);