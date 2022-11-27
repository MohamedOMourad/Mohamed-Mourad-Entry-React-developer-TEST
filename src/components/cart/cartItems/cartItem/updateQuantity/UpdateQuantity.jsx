import { Component } from "react";
import { connect } from "react-redux";
import { increaseQuantity } from "../../../../../redux/features/cart/cartSlice";
import { decreaseQuantity } from "../../../../../redux/features/cart/cartSlice";
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
                <div onClick={this.increaseQuantityHandler.bind(this)}>+</div>
                <span>{quantity}</span>
                <div onClick={this.decreaseQuantityHandler.bind(this)}>-</div>
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
