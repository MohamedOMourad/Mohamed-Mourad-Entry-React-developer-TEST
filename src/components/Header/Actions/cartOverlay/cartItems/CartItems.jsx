import { Component } from "react";
import { connect } from "react-redux";
import styles from './CartItems.module.css'

class CartItems extends Component {
    render() {
        console.log(this.props.cartItems);
        return (
            <div className={styles.container}>
                <div className={styles['items-container']}>
                    <p style={{ display: 'flex' }}>
                        <span>My Bag </span>
                        <span>0 </span>
                        <span>items</span>
                    </p>
                    <div className={styles.scrolls}>
                        <div className={styles['item-container']}>
                            <div className={styles.description}>
                                <div>brand</div>
                                <div>name</div>
                                <div>price</div>
                                <div>
                                    <div>size:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                                <div>
                                    <div>color:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.update}>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <div style={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'})` }} className={styles.image}> </div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles.description}>
                                <div>brand</div>
                                <div>name</div>
                                <div>price</div>
                                <div>
                                    <div>size:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                                <div>
                                    <div>color:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.update}>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <div style={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'})` }} className={styles.image}> </div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles.description}>
                                <div>brand</div>
                                <div>name</div>
                                <div>price</div>
                                <div>
                                    <div>size:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                                <div>
                                    <div>color:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.update}>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <div style={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'})` }} className={styles.image}> </div>
                        </div>
                        <div className={styles['item-container']}>
                            <div className={styles.description}>
                                <div>brand</div>
                                <div>name</div>
                                <div>price</div>
                                <div>
                                    <div>size:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                                <div>
                                    <div>color:</div>
                                    <div className={styles.sizes}>
                                        <div>xs</div>
                                        <div>s</div>
                                        <div>m</div>
                                        <div>l</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.update}>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <div style={{ backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'})` }} className={styles.image}> </div>
                        </div>
                    </div>
                    <div className={styles.checkout}>
                        <button>view bag</button>
                        <button>checkout</button>
                    </div>
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