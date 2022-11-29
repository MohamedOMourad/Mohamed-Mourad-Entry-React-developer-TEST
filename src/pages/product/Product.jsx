//React Component
import { Component } from "react";
import ProductGallery from "../../components/product/productGallery/ProductGallery";
import ProductDescription from '../../components/product/productDescription/ProductDescription';

//CSS
import styles from './Product.module.css';

//Graphql
import { getProduct } from "../../utils/graphql";

//React-router
import { withRouter } from "react-router-dom";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }


    componentDidMount() {
        try {
            (async () => {
                const { id } = this?.props?.match?.params;
                const product = await getProduct(id);
                this.setState({ product })
            })()
        } catch (error) {
            console.log(error)
        }
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