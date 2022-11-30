//React Component
import { Component } from "react";

//CSS
import styles from './CartFooter.module.css';

//React-redux
import { connect } from "react-redux";
import { resetCart } from "../../../../../redux/features/cart/cartSlice";

//React-router
import { Link } from 'react-router-dom';

//function helper
import { calculateCartTotal } from "../../../../../utils/functions";

class CartFooter extends Component {

    submitOrderHandler() {
        const { resetCart } = this.props;
        resetCart([])
    }

    render() {

        const { cartItems, selectedCurrency, selectedCurrencyIndex, openCartHandler } = this.props;

        const total = calculateCartTotal(cartItems, selectedCurrencyIndex);

        return (
            <div>
                <div className={styles['cart-total']}>
                    <strong>Total</strong><span>{`${selectedCurrency.symbol}${total.toFixed(2)}`}</span>
                </div>
                <div className={styles.checkout}>
                    <Link to='/cart' className={styles.navigator}>
                        <button className={styles['view-bag-btn']} onClick={openCartHandler}>VIEW BAG</button>
                    </Link>
                    <button className={styles['checkout-btn']} onClick={this.submitOrderHandler.bind(this)}>CHECKOUT</button>
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

const mapDispatchToProps = (dispatch) => {
    return { resetCart: () => dispatch(resetCart()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartFooter);