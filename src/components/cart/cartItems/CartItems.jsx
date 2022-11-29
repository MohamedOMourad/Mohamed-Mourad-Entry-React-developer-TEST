//React Component
import { Component } from "react";
import CartItem from "./cartItem/CartItem";

//CSS
import styles from './CartItems.module.css'


//Redux
import { connect } from "react-redux";
import { resetCart } from '../../../redux/features/cart/cartSlice'

class CartItems extends Component {

    submitOrderHandler() {
        const { resetCart } = this.props;
        resetCart([])
    }

    render() {
        const { cartItems, CartQuantity, selectedCurrencyIndex, selectedCurrency } = this.props;
        let total = 0;

        //calculate total cart items
        cartItems.map((item) => {
            total += item.quantity * item.product.prices[selectedCurrencyIndex].amount;
        })

        const tax = (total * 21) / 100;
        return (
            <>
                <div className={styles['items-container']}>
                    {cartItems.map((item) => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>
                <div className={styles['cart-details']}>
                    <div className={styles.tax}>Tax 21%: {tax.toFixed(2)}</div>
                    <div className={styles.Quantity}>Quantity: {CartQuantity}</div>
                    <div className={styles.total}>Total: {selectedCurrency.symbol} {total.toFixed(2)}</div>
                </div>
                <button className={styles['order-btn']} onClick={this.submitOrderHandler.bind(this)}>
                    ORDER
                </button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return { resetCart: () => dispatch(resetCart()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);