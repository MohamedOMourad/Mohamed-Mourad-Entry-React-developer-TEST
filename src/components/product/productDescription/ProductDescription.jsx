//React Component
import { Component } from "react";
import ProductAttributes from "./productAttributes/ProductAttributes";
import Description from './Description/Description'

//CSS
import styles from './ProductDescription.module.css';

//React-redux
import { connect } from 'react-redux';
import { addItemToCart } from '../../../redux/features/cart/cartSlice';

class ProductDescription extends Component {

    addToCartHandler() {
        const { product, selectedAttributes, selectedColor, addItemToCart } = this.props;
        const { id, name, brand, gallery, attributes, prices } = product;
        addItemToCart({
            product: { id, name, brand, img: gallery[0], gallery, prices, attributes, selectedColor, selectedAttributes, price: prices[0] },
            selectedAttributes,
            selectedColor
        })
    }

    render() {
        const { product, selectedCurrency } = this?.props;
        const { name, prices, inStock, description, brand, attributes } = product;
        const price = prices?.find(price => price?.currency?.label === selectedCurrency?.label);
        return (
            <section className={styles['product-description']}>
                <h2 className={styles['product-brand']}>{brand}</h2>
                <p className={styles['product-name']}>{name}</p>
                <div className={styles['product-options']}>
                    {
                        attributes?.map((attribute, index) => (
                            <ProductAttributes key={attribute?.id} attribute={attribute} />
                        ))
                    }
                </div>
                <div className={styles['product-price']}>
                    <h2>PRICE:</h2>
                    <p className={styles['product-price']}>{price?.currency?.symbol} {price?.amount}</p>
                </div>
                {inStock && <div className={styles['add-to-cart']} onClick={this.addToCartHandler.bind(this)}> ADD TO CART</div>}
                {description && <Description description={description} />}
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedCurrency: state.Currency.selectedCurrency,
        selectedAttributes: state.Product.selectedAttributes,
        selectedColor: state.Product.selectedColor,
    };
}
const mapDispatchToProps = (dispatch) => {
    return { addItemToCart: (payload) => dispatch(addItemToCart(payload)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
