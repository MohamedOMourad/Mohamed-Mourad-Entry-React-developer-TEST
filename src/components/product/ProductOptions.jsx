import { Component } from "react";
import ColorsAttributes from "./attributes/ColorsAttributes";
import Attributes from "./attributes/Attributes";
class ProductOptions extends Component {
    render() {
        const { id, name, type, items } = this.props.option
        // console.log([...options].sort((b, a) => a.type.localeCompare(b.type)))
        return (
            <div>
                <h2>{name.toUpperCase()}:</h2>
                {type === 'text' ? <Attributes attributes={items} /> : <ColorsAttributes colors={items} />}
            </div>
        )
    }
}

export default ProductOptions;