import { Component } from "react";
import styles from './CartHeader.module.css'
class CartHeader extends Component {
    render() {
        return (
            <p style={{ display: 'flex' }}>
                <span>My Bag </span>
                <span>0 </span>
                <span>items</span>
            </p>
        )
    }
}

export default CartHeader;