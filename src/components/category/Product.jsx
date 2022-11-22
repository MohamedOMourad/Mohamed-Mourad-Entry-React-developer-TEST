import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Product.module.css'
import { Link } from "react-router-dom";
class Product extends Component {
    render() {
        const { name, prices, inStock, id, gallery, description, brand, attributes } = this.props.product;
        const { currency } = this.props;
        const price = prices.find(price => price.currency.label === currency.label)
        return (
            <Link to={`/product/${id}`} className={styles.container}>
            {/* <Link to={`/product`} className={styles.container}> */}
                <div className={styles['product-card']}>
                    <div className={styles['product-img']} style={{ backgroundImage: `url(${gallery[0]})` }} />
                    <div className={styles['product-description']}>
                        <h4 className={styles['product-brand']}>{brand} {name}</h4>
                        <p className={styles['product-price']}>{price.currency.symbol} {price.amount}</p>
                    </div>
                </div>
            </Link >
        )
    }
}

const mapStateToProps = (state) => {
    return { currency: state.Currency.currency };
}

export default connect(mapStateToProps)(Product);