import { Component } from "react";
import ProductOptions from "../ProductAttributes";
import styles from './ProductDescription.module.css';
import Description from './Description';
import { connect } from 'react-redux';

class ProductDescription extends Component {
    render() {
        const { product, selectedCurrency } = this.props;
        const { name, prices, inStock, description, brand, attributes } = product;
        const price = prices?.find(price => price.currency.label === selectedCurrency.label);
        return (
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
                {inStock && <div className={styles['add-to-cart']}> ADD TO CART</div>}
                {description && <Description description={description} />}
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedCurrency: state.Currency.selectedCurrency,
    };
}
export default connect(mapStateToProps)(ProductDescription);
