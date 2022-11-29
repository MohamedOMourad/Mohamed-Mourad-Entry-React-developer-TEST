//React Component
import { Component } from "react";

//CSS
import styles from './CartIcon.module.css';

//React-redux
import { connect } from "react-redux";
import cartIcon from '../../../../../assets/cart-icon.svg';

class CartIcon extends Component {

    render() {
        const { CartQuantity } = this.props
        return (
            <div className={styles.container} onClick={this.props.openCartHandler}>
                <img src={cartIcon} alt="cart icon" />
                {CartQuantity > 0 && <div className={styles['cart-quantity']}>
                    {CartQuantity}
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CartQuantity: state.Cart.CartQuantity
    }
}
export default connect(mapStateToProps)(CartIcon);