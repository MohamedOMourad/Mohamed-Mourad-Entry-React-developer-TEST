import { Component } from "react";
import Attributes from "./Attributes/Attributes";
import ColorAttribute from "./ColorAttribute/ColorAttribute";
import styles from './ProductAttributes.module.css'

class ProductAttributes extends Component {
    render() {
        const { attribute, selectedAttribute } = this.props
        const { name, type, items } = attribute
        return (
            <>
                <h4 className={styles['attribute-name']}>{name}:</h4>
                {type === 'text' ? <Attributes attributes={items} /> : <ColorAttribute colors={items} />}
            </>
        )
    }
}

export default ProductAttributes;