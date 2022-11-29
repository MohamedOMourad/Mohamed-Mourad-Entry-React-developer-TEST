//React Component
import { Component } from "react";
import CartIcon from "./cartIcon/CartIcon";
import CartItems from "./cartItems/CartItems";

//CSS
import styles from './CartOverlay.module.css';

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
            <div className={styles.container}>
                <CartIcon openCartHandler={this.openCartHandler.bind(this)} />
                {cartIsOpen && <CartItems openCartHandler={this.openCartHandler.bind(this)} />}
            </div>
        )
    }
}

export default CartOverlay;