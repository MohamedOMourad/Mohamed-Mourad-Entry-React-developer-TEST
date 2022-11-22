import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getProduct } from "../../utils/graphql";
import styles from './Product.module.css';
import ProductOptions from "../../components/product/ProductOptions";
import { connect } from 'react-redux';

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
        const { name, prices, inStock, id, gallery, description, brand, attributes } = this?.state?.product;
        const price = prices?.find(price => price.currency.label === this.props.currency.label);
        return (
            <main className={styles.main}>
                <section>

                </section>
                <section className={styles['product-description']}>
                    <h2 className={styles['product-brand']}>{brand}</h2>
                    <p className={styles['product-name']}>{name}</p>
                    <div className={styles['product-options']}>
                        {
                            attributes?.map(attribute => (
                                <ProductOptions key={attribute?.id} option={attribute} />
                            ))
                        }
                    </div>
                    <div className={styles['product-price']}>
                        <h2>PRICE:</h2>
                        <p className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</p>
                    </div>
                    <div className={styles['add-to-cart']}>
                        ADD TO CART
                    </div>
                </section>
                <Link to='/'>ffffffffffffffffff</Link>
            </main>)
    } y
}

const mapStateToProps = (state) => {
    return { currency: state.Currency.currency };
}
const routedProduct = withRouter(Product);
export default connect(mapStateToProps)(routedProduct);