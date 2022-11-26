import { Component } from "react";
import Attributes from "./Attributes/Attributes";
import ColorAttribute from "./ColorAttribute/ColorAttribute";

class ProductAttributes extends Component {
    render() {
        const { name, type, items } = this.props.option
        return (
            <>
                <p>{name}:</p>
                {type === 'text' ? <Attributes attributes={items} /> : <ColorAttribute colors={items} />}
            </>
        )
    }
}

export default ProductAttributes;