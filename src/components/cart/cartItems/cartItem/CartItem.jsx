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
                    <div>
                        {product && <UpdateQuantity productId={product.id} quantity={quantity} />}
                        <ItemImage image={product.img} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;