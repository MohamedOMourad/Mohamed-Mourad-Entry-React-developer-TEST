import { Component } from "react";
import { connect } from "react-redux";
import styles from './Cart.module.css';
import CartItems from "../../components/cart/cartItems/CartItems";

class Cart extends Component {
    render() {
        return (
            <main className={styles.main}>
                <h2>CART</h2>
                <CartItems />
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart.cartItems,
        selectedCurrency: state.Currency.selectedCurrency
    }
}


export default connect(mapStateToProps)(Cart);