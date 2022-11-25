import { Component } from "react";
import styles from './ItemImage.module.css'
class ItemImage extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'})` }} className={styles.image} />
        )
    }
}

export default ItemImage;
