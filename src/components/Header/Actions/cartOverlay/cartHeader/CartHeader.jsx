import { Component } from "react";
import styles from './CartHeader.module.css'
class CartHeader extends Component {
    render() {
        const { CartQuantity } = this.props;
        return (
            <span><strong>My Bag, </strong>{`${CartQuantity} items`}</span>
        )
    }
}

export default CartHeader;