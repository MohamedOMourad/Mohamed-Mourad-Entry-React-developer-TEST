//React Component
import { Component } from "react";
import CartHeader from "../cartHeader/CartHeader";
import CartItem from "./cartItem/CartItem";
import CartFooter from "../cartFooter/CartFooter";

//CSS
import styles from './CartItems.module.css';

//React-redux
import { connect } from "react-redux";

class CartItems extends Component {
    render() {
        const { cartItems, CartQuantity, openCartHandler } = this.props
        return (
            <>
                <div className={styles.container} onClick={openCartHandler} />
                <div className={styles['items-container']}>
                    <CartHeader CartQuantity={CartQuantity} />
                    <div className={styles['item-container']}>
                        {cartItems.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))}
                    </div>
                    <CartFooter cartItems={cartItems} openCartHandler={openCartHandler} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart.cartItems,
        CartQuantity: state.Cart.CartQuantity
    }
}

export default connect(mapStateToProps)(CartItems);