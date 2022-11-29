//React Component
import { Component } from "react";

class CartHeader extends Component {
    render() {
        const { CartQuantity } = this.props;
        return (
            <span><strong>My Bag, </strong>{`${CartQuantity} items`}</span>
        )
    }
}

export default CartHeader;