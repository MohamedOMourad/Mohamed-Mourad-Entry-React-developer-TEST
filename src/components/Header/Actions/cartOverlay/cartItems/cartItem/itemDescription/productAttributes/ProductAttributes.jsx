import { Component } from "react";
import Attributes from "./Attributes/Attributes";
import ColorAttribute from "./ColorAttribute/ColorAttribute";
import { connect } from 'react-redux';
import { updateItemAttributes, updateItemColor } from '../../../../../../../../redux/features/cart/cartSlice';
class ProductAttributes extends Component {
    render() {
        const { selectedAttribute, selectedColor, options, updateItemAttributes, updateItemColor, productId } = this.props
        const { name, type, items } = options
        return (
            <>
                <p>{name}:</p>
                {type === 'text' ?
                    <Attributes productId={productId} attributes={items} selectedAttribute={selectedAttribute} updateItemAttributes={updateItemAttributes} />
                    :
                    <ColorAttribute productId={productId} selectedColor={selectedColor} colors={items} updateItemColor={updateItemColor} />}
            </>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItemAttributes: (payload) => dispatch(updateItemAttributes(payload)),
        updateItemColor: (payload) => dispatch(updateItemColor(payload)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes);

