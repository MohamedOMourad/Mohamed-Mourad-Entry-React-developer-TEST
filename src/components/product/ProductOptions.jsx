import { Component } from "react";
import ColorsAttributes from "./attributes/ColorsAttributes";
import Attributes from "./attributes/Attributes";
class ProductOptions extends Component {
    render() {
        const { name, type, items } = this.props.option
        return (
            <div>
                <h2>{name.toUpperCase()}:</h2>
                {type === 'text' ? <Attributes attributes={items} /> : <ColorsAttributes colors={items} />}
            </div>
        )
    }
}

export default ProductOptions;