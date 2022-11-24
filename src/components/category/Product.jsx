import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Product.module.css'
import { Link } from "react-router-dom";
import CartIcon from '../../assets/cart-icon-white.svg';
import { addItemToCart } from '../../redux/features/cart/cartSlice';
class Product extends Component {

    addToCartHandler() {
        const { product } = this.props;
        console.log(product);
        if (product) {
            this.props.addItemToCart(product)
        }
    }

    render() {
        const { name, prices, id, gallery, brand, } = this.props.product;
        const { currency } = this.props;
        const price = prices.find(price => price.currency.label === currency.label)
        return (
            <div className={styles.container}>
                <Link to={`/product/${id}`} className={styles.container}>
                    <div className={styles['product-img']} style={{ backgroundImage: `url(${gallery[0]})` }} />
                    <div className={styles['product-description']}>
                        <h4 className={styles['product-brand']}>{brand} {name}</h4>
                        <p className={styles['product-price']}>{price.currency.symbol} {price.amount}</p>
                    </div>
                </Link >
                <button className={styles['cart-btn']} onClick={this.addToCartHandler.bind(this)}>
                    <img src={CartIcon} alt="add to cart" />
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { currency: state.Currency.currency };
}

const mapDispatchToProps = (dispatch) => {
    return { addItemToCart: (payload) => dispatch(addItemToCart(payload)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);