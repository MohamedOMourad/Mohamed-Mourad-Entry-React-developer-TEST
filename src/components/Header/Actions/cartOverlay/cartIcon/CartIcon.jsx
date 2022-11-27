import { Component } from "react";
import cartIcon from '../../../../../assets/cart-icon.svg'
class CartIcon extends Component {

    render() {
        return (
            <div onClick={this.props.openCartHandler}>
                <img src={cartIcon} alt="cart icon" />
            </div>
        )
    }
}

export default CartIcon;