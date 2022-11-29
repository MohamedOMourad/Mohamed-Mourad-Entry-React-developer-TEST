//React Component
import { Component } from "react";
import CartItems from "../../components/cart/cartItems/CartItems";

//CSS
import styles from './Cart.module.css';

//React-redux
import { connect } from "react-redux";

class Cart extends Component {
    render() {
        const { cartItems, CartQuantity, selectedCurrencyIndex, selectedCurrency } = this.props;
        return (
            <main className={styles.main}>
                <h2 className={styles['cart-header']}>CART</h2>
                <CartItems
                    cartItems={cartItems}
                    CartQuantity={CartQuantity}
                    selectedCurrencyIndex={selectedCurrencyIndex}
                    selectedCurrency={selectedCurrency}
                />
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart.cartItems,
        CartQuantity: state.Cart.CartQuantity,
        selectedCurrencyIndex: state.Currency.selectedCurrencyIndex,
        selectedCurrency: state.Currency.selectedCurrency,
    }
}


export default connect(mapStateToProps)(Cart);