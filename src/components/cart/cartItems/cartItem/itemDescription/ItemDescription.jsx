import { Component } from "react";
import { connect } from "react-redux";
import styles from './ItemDescription.module.css';
import ProductAttributes from "./productAttributes/ProductAttributes";



class ItemDescription extends Component {
    render() {

        const { product, selectedCurrency } = this.props;
        const { name, brand, attributes, prices } = product;
        const price = prices?.find(price => price.currency.label === selectedCurrency.label);
        return (
            <div className={styles.description}>
                <div>{brand}</div>
                <div>{name}</div>
                <div className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</div>
                <div className={styles['product-options']}>
                    {
                        attributes?.map(attribute => (
                            <ProductAttributes key={attribute?.id} option={attribute} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { selectedCurrency: state.Currency.selectedCurrency };
}

export default connect(mapStateToProps)(ItemDescription);
