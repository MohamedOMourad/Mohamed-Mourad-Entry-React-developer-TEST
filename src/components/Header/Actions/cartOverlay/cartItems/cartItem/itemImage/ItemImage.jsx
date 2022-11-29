//React Component
import { Component } from "react";

//CSS
import styles from './ItemImage.module.css';

class ItemImage extends Component {
    render() {
        const { image } = this.props
        return (
            <div style={{ backgroundImage: `url(${image})` }} className={styles.image} />
        )
    }
}

export default ItemImage;
