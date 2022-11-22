import { Component } from "react";
import { connect } from "react-redux";
import { storeSelectedCategory } from '../../redux/features/category/categorySlice';
import styles from './Category.module.css';
import Product from "../../components/category/Product";
class Category extends Component {

    render() {
        const { products } = this.props.category
        return products ? (
            <main className={styles.main}>
                <h2 className={styles.title}>{this.props.category.name.toUpperCase()}</h2>
                <section className={styles['products-container']}>
                    {products.map(product => (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    ))}
                </section>
            </main>
        ) : (
            <h1>Loading...</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.Category.category
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeSelectedCategory: (payload) => dispatch(storeSelectedCategory(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);