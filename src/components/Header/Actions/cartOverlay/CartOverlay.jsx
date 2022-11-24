import { Component } from "react";
import styles from './CartOverlay.module.css';
import CartItems from "./cartItems/CartItems";
import CartIcon from "./cartIcon/CartIcon";

class CartOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartIsOpen: false
        }
    }

    openCartHandler() {
        this.setState((prevState) => ({ cartIsOpen: !prevState.cartIsOpen }))
    }

    render() {
        const { cartIsOpen } = this.state
        return (
            <div className={styles.container} onClick={this.openCartHandler.bind(this)}>
                <CartIcon />
                {cartIsOpen && <CartItems />}
            </div>
        )
    }
}

export default CartOverlay;