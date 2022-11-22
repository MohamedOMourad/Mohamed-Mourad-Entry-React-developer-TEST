import { Component } from "react";
// import styles from './CartIcon.module.css';
import cartIcon from '../../../../assets/cart-icon.svg'
class CartIcon extends Component {
    render() {
        return (
            <div>
                <img src={cartIcon} alt="cart icon" />
            </div>
        )
    }
}

export default CartIcon;