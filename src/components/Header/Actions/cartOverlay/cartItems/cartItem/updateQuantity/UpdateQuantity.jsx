import { Component } from "react";
import styles from './UpdateQuantity.module.css'
class UpdateQuantity extends Component {
    render() {
        const { quantity } = this.props
        return (
            <div className={styles.quantity}>
                <div>+</div>
                <span>{quantity}</span>
                <div>-</div>
            </div>
        )
    }
}

export default UpdateQuantity;
