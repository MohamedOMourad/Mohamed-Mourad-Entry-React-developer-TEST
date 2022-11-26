import { Component } from "react";
import { connect } from "react-redux";
import styles from './ItemDescription.module.css';
import Attributes from "./Attributes";
import ColorAttribute from "./ColorAttribute";

class ProductOptions extends Component {
    render() {
        const { name, type, items } = this.props.option
        return (
            <>
                <p>{name}:</p>
                {type === 'text' ? <Attributes attributes={items} /> : <ColorAttribute colors={items} />}
            </>
        )
    }
}

class ItemDescription extends Component {
    render() {
        const { name, prices, inStock, description, brand, attributes } = this.props.product;
        const price = prices?.find(price => price.currency.label === this.props.currency.label);
        return (
            <div className={styles.description}>
                <div>{brand}</div>
                <div>{name}</div>
                <div className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</div>
                <div className={styles['product-options']}>
                    {
                        attributes?.map(attribute => (
                            <ProductOptions key={attribute?.id} option={attribute} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currency: state.Currency.currency };
}

export default connect(mapStateToProps)(ItemDescription);
