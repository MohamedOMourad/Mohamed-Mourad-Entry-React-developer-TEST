import { Component } from "react";
import { connect } from "react-redux";
import styles from './ItemDescription.module.css';
import ProductAttributes from "./productAttributes/ProductAttributes";



class ItemDescription extends Component {
    render() {

        const { product, selectedCurrency, selectedAttributes } = this.props;
        const { name, brand, attributes, prices } = product;
        const price = prices?.find(price => price.currency.label === selectedCurrency.label);
        return (
            <div className={styles.description}>
                <div className={styles['product-brand']}>{brand}</div>
                <div className={styles['product-name']}>{name}</div>
                <div className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</div>
                <div className={styles['product-attributes']}>
                    {
                        attributes?.map((attribute, index) => (
                            <ProductAttributes key={attribute?.id} attribute={attribute} selectedAttribute={selectedAttributes[index]} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedCurrency: state.Currency.selectedCurrency,
        selectedAttributes: state.Cart.selectedAttributes
    };
}

export default connect(mapStateToProps)(ItemDescription);
