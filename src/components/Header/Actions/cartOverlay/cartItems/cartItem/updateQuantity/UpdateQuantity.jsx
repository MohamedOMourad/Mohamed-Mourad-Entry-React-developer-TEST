import { Component } from "react";
import { connect } from "react-redux";
import { increaseQuantity } from "../../../../../../../redux/features/cart/cartSlice";
import { decreaseQuantity } from "../../../../../../../redux/features/cart/cartSlice";
import plus from '../../../../../../../assets/plus-icon.svg'
import minus from '../../../../../../../assets/minus-icon.svg'
import styles from './UpdateQuantity.module.css'
class UpdateQuantity extends Component {
    increaseQuantityHandler() {
        const { increaseQuantity, productId } = this.props;
        increaseQuantity(productId);
    }

    decreaseQuantityHandler() {
        const { decreaseQuantity, productId } = this.props;
        decreaseQuantity(productId);
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
