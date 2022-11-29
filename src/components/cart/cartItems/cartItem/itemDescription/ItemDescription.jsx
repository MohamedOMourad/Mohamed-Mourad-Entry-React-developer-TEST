//React Component
import { Component } from "react";
import ItemAttributes from "./itemAttributes/ItemAttributes";

//CSS
import styles from './ItemDescription.module.css';

//React-redux
import { connect } from "react-redux";

class ItemDescription extends Component {
    render() {

        const { product, selectedCurrency } = this.props;
        const { name, brand, attributes, selectedAttributes, selectedColor, prices } = product;
        const price = prices?.find(price => price.currency.label === selectedCurrency.label);
        return (
            <div className={styles.description}>
                <div className={styles['product-brand']}>{brand}</div>
                <div className={styles['product-name']}>{name}</div>
                <div className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</div>
                <div className={styles['product-attributes']}>
                    {
                        attributes?.map((attribute, index) => (
                            <ItemAttributes key={attribute?.id} product={product} attribute={attribute} selectedAttribute={selectedAttributes[index]} selectedColor={selectedColor} />
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
    };
}

export default connect(mapStateToProps)(ItemDescription);
