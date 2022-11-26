import { Component } from "react";
import { connect } from "react-redux";
import CartFooter from "../cartFooter/CartFooter";
import CartHeader from "../cartHeader/CartHeader";
import CartItem from "./cartItem/CartItem";
import styles from './CartItems.module.css'

class CartItems extends Component {
    render() {
        const { cartItems } = this.props
        // const { id, brand, name, img, color, attribute, attributes, price, prices } = product
        console.log(this.props.cartItems);
        return (
            <div className={styles.container}>
                <div className={styles['items-container']}>
                    <CartHeader cartItems={cartItems} />
                    {cartItems.map((item) => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                    <CartFooter cartItems={cartItems} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart.cartItems
    }
}

export default connect(mapStateToProps)(CartItems);