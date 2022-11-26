import { Component } from "react";
import styles from './CartHeader.module.css'
class CartHeader extends Component {
    render() {
        const { cartItems } = this.props;
        let quantity = 0;
        cartItems.map((item) => {
            quantity += item.quantity;
        })
        return (
            <span><strong>My Bag, </strong>{`${quantity} items`}</span>
        )
    }
}

export default CartHeader;