import { Component } from "react";
import styles from './UpdateQuantity.module.css'
class UpdateQuantity extends Component {
    render() {
        return (
            <div className={styles.update}>
                <button>+</button>
                <span>0</span>
                <button>-</button>
            </div>
        )
    }
}

export default UpdateQuantity;
