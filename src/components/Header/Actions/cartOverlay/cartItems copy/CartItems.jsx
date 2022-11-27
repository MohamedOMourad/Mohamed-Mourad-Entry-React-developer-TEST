import { Component } from "react";
import { connect } from "react-redux";
import CartFooter from "../../Header/Actions/cartOverlay/cartFooter/CartFooter";
import CartHeader from "../../Header/Actions/cartOverlay/cartHeader/CartHeader";
import CartItem from "./cartItem/CartItem";
import styles from './CartItems.module.css'

class CartItems extends Component {
    render() {
        const { cartItems, openCartHandler } = this.props
        console.log(this.props.cartItems);
        return (
            <>
                <div className={styles.container} onClick={openCartHandler} />
                <div className={styles['items-container']}>
                    <CartHeader cartItems={cartItems} />
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
        cartItems: state.Cart.cartItems
    }
}

export default connect(mapStateToProps)(CartItems);