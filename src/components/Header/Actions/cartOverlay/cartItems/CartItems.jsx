import { Component } from "react";
import { connect } from "react-redux";
import styles from './CartItems.module.css'

class CartItems extends Component {
    render() {
        console.log(this.props.cartItems);
        return (
            <div className={styles.container}>
                <div className={styles['items-container']}>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart.cartItems
    }
}

export default connect(mapStateToProps)(CartItems);