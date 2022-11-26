import { Component } from "react";
import styles from './CartFooter.module.css'
class CartFooter extends Component {
    render() {
        const { cartItems } = this.props;
        let quantity = 0;
        let total = 0
        cartItems.map((item) => {
            total += item.quantity * item.product.price.amount;
        })
        return (
            <div>
                <div>
                    <span>total</span><span>{total}</span>
                </div>
                <div className={styles.checkout}>
                    <button>view bag</button>
                    <button>checkout</button>
                </div>
            </div>
        )
    }
}

export default CartFooter;