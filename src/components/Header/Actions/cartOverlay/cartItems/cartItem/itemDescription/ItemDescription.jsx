import { Component } from "react";
import styles from './ItemDescription.module.css'
class ItemDescription extends Component {
    render() {
        return (
            <div className={styles.description}>
                <div>brand</div>
                <div>name</div>
                <div>price</div>
                <div>
                    <div>size:</div>
                    <div className={styles.sizes}>
                        <div>xs</div>
                        <div>s</div>
                        <div>m</div>
                        <div>l</div>
                    </div>
                </div>
                <div>
                    <div>color:</div>
                    <div className={styles.sizes}>
                        <div>xs</div>
                        <div>s</div>
                        <div>m</div>
                        <div>l</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDescription;
