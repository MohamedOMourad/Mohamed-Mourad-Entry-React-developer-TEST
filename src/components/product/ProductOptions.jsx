import { Component } from "react";

class ProductOptions extends Component {
    render() {
        const options = this.props.options;
        console.log([...options])
        return (
            <div>
                <h2></h2>
            </div>
        )
    }
}

export default ProductOptions;