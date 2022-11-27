import { Component } from "react";
import { connect } from "react-redux";
import CartFooter from "../cartFooter/CartFooter";
import CartHeader from "../cartHeader/CartHeader";
import CartItem from "./cartItem/CartItem";
import styles from './CartItems.module.css'

class CartItems extends Component {
    render() {
        const { cartItems, CartQuantity, openCartHandler } = this.props
        console.log(this.props.cartItems);
        return (
            <>
                <div className={styles.container} onClick={openCartHandler} />
                <div className={styles['items-container']}>
                    <CartHeader CartQuantity={CartQuantity} />
                    <div className={styles['item-container']}>
                        {cartItems.map((item) => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                    </div>
                    <CartFooter cartItems={cartItems} />
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