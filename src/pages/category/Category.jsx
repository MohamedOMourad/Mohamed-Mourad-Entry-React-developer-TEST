//React Component
import { Component } from "react";
import Product from "../../components/category/Product";

//CSS
import styles from './Category.module.css';

//Graphql
import { getCategories } from '../../utils/graphql';

//Redux
import { connect } from "react-redux";
import { storeCategories, storeSelectedCategory } from '../../redux/features/category/categorySlice';


class Category extends Component {

    componentDidMount() {
        try {
            //get all categories's products
            (async () => {
                const categories = await getCategories();
                this.props.storeCategories(categories)
                this.props.storeSelectedCategory('all') //make default category is all products
            })()
        } catch (error) {
            console.log(error);
        }
    }

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
        categories: state.Category.categories,
        category: state.Category.category
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeCategories: (payload) => dispatch(storeCategories(payload)),
        storeSelectedCategory: (payload) => dispatch(storeSelectedCategory(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
