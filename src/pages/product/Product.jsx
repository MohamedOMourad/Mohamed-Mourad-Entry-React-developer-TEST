import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getProduct } from "../../utils/graphql";
import styles from './Product.module.css';
import ProductOptions from "../../components/product/ProductOptions";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        (async () => {
            const { id } = this.props.match.params;
            const product = await getProduct(id);
            this.setState({ product })
        })()
    }

    render() {
        const { name, prices, inStock, id, gallery, description, brand, attributes } = this.state.product;
        return (
            <main className={styles.main}>
                <section>

                </section>
                <section className={styles['product-description']}>
                    <h2 className={styles['product-brand']}>{brand}</h2>
                    <p className={styles['product-name']}>{brand}</p>
                    <div className={styles['product-options']}>
                        {
                            attributes?.map(attribute => (
                                <ProductOptions key={attribute.id} options={attribute} />
                            ))
                        }
                    </div>
                </section>
                <Link to='/'>ffffffffffffffffff</Link>
            </main>)
    } y
}

export default withRouter(Product);