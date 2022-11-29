import { Component } from "react";
import styles from './CartItem.module.css'
import ItemDescription from "./itemDescription/ItemDescription";
import UpdateQuantity from "./updateQuantity/UpdateQuantity";
import ItemImage from "./itemImage/ItemImage";

class CartItem extends Component {
    render() {
        const { product, quantity } = this.props.item
        return (
            <div className={styles.scrolls}>
                <div className={styles['item-container']}>
                    <ItemDescription product={product} />
                    {product && <UpdateQuantity product={product} quantity={quantity} />}
                    <ItemImage image={product.img} />
                </div>
            </div>
        )
    }
}

export default CartItem;