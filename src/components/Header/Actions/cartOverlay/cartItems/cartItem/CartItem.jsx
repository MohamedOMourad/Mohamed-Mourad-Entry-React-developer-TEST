import { Component } from "react";
import styles from './CartItem.module.css'
import ItemDescription from "./itemDescription/itemDescription";

class CartItem extends Component {
    render() {
        return (
            <div className={styles.scrolls}>
                <div className={styles['item-container']}>
                    <ItemDescription />
                </div>
            </div>
        )
    }
}

export default CartItem;