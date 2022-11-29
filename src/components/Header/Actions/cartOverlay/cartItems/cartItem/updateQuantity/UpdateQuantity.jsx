import { Component } from "react";
import { connect } from "react-redux";
import { increaseQuantity } from "../../../../../../../redux/features/cart/cartSlice";
import { decreaseQuantity } from "../../../../../../../redux/features/cart/cartSlice";
import plus from '../../../../../../../assets/plus-icon.svg'
import minus from '../../../../../../../assets/minus-icon.svg'
import styles from './UpdateQuantity.module.css'
class UpdateQuantity extends Component {
    increaseQuantityHandler() {
        const { increaseQuantity, product } = this.props;
        increaseQuantity({ productId: product.id, uniqueId: product.uniqueId });
    }

    decreaseQuantityHandler() {
        const { decreaseQuantity, product } = this.props;
        decreaseQuantity({ productId: product.id, uniqueId: product.uniqueId });
    }

    render() {
        const { quantity } = this.props
        return (
            <div className={styles.quantity}>
                <div onClick={this.increaseQuantityHandler.bind(this)}>
                    <img src={plus} alt="" />
                </div>
                <span>{quantity}</span>
                <div onClick={this.decreaseQuantityHandler.bind(this)}>
                    <img src={minus} alt="" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = () => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {
        increaseQuantity: (payload) => dispatch(increaseQuantity(payload)),
        decreaseQuantity: (payload) => dispatch(decreaseQuantity(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuantity);
