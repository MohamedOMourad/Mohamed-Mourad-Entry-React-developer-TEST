import { Component } from "react";
import Attributes from './attributes/Attributes'
import ColorsAttributes from './attributes/ColorsAttributes'
class ProductAttributes extends Component {
    render() {
        const { attribute, selectedAttribute } = this?.props
        const { name, type, items } = attribute
        return (
            <>
                <h2>{name.toUpperCase()}:</h2>
                {type === 'text' ?
                    <Attributes attributes={items} selectedAttribute={selectedAttribute} />
                    :
                    <ColorsAttributes colors={items} />}
            </>
        )
    }
}

export default ProductAttributes;