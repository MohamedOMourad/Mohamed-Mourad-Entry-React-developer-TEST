//React Component
import { Component } from "react";
import Attributes from './attributes/Attributes';
import ColorsAttributes from './attributes/ColorsAttributes';

class ProductAttributes extends Component {
    render() {
        const { name, type, items } = this?.props?.attribute
        return (
            <>
                <h2>{name.toUpperCase()}:</h2>
                {type === 'text' ?
                    <Attributes attributes={items} />
                    :
                    <ColorsAttributes colors={items} />}
            </>
        )
    }
}

export default ProductAttributes;