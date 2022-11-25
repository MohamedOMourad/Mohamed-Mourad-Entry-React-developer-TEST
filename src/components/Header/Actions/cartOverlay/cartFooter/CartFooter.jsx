import { Component } from "react";
import styles from './CartFooter.module.css'
class CartFooter extends Component {
    render() {
        return (
            <div className={styles.checkout}>
                <button>view bag</button>
                <button>checkout</button>
            </div>
        )
    }
}

export default CartFooter;