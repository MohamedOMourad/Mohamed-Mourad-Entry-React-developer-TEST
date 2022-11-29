import { Component } from "react";
import { connect } from "react-redux";
import Attributes from "./Attributes/Attributes";
import ColorAttribute from "./ColorAttribute/ColorAttribute";
import styles from './ItemAttributes.module.css';
import { updateItemAttributes, updateItemColor } from '../../../../../../redux/features/cart/cartSlice'

class ItemAttributes extends Component {
    render() {
        const { attribute, selectedAttribute, selectedColor, updateItemAttributes, updateItemColor, product } = this.props
        const { name, type, items } = attribute
        return (
            <>
                <h4 className={styles['attribute-name']}>{name}:</h4>
                {type === 'text' ?
                    <Attributes product={product} attributes={items} selectedAttribute={selectedAttribute} updateItemAttributes={updateItemAttributes} />
                    :
                    <ColorAttribute product={product} colors={items} selectedColor={selectedColor} updateItemColor={updateItemColor} />
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemAttributes);