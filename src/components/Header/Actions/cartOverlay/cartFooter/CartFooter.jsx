import { Component } from "react";
import { connect } from "react-redux";
import styles from './CartFooter.module.css';
import { Link } from 'react-router-dom'
class CartFooter extends Component {
    render() {
        const { cartItems, selectedCurrency, selectedCurrencyIndex } = this.props;
        let total = 0;

        //calculate total cart items
        cartItems.map((item) => {
            total += item.quantity * item.product.prices[selectedCurrencyIndex].amount;
        })

        return (
            <div>
                <div className={styles['cart-total']}>
                    <strong>Total</strong><span>{`${selectedCurrency.symbol}${total.toFixed(2)}`}</span>
                </div>
                <div className={styles.checkout}>
                    <Link to='/cart' className={styles.navigator}>
                        <button className={styles['view-bag-btn']}>VIEW BAG</button>
                    </Link>
                    <button className={styles['checkout-btn']}>CHECKOUT</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedCurrencyIndex: state.Currency.selectedCurrencyIndex,
        selectedCurrency: state.Currency.selectedCurrency,
    };
}
export default connect(mapStateToProps)(CartFooter);