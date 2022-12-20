//React Component
import { Component } from "react";

//CSS
import styles from './Navigation.module.css';

//react-redux
import { connect } from "react-redux";
import { storeSelectedCategory } from "../../../redux/features/category/categorySlice";

//react-router-dom
import { Link } from "react-router-dom";

export class Navigation extends Component {

    filterCategoriesHandler(selectedCategory) {
        this.props.storeSelectedCategory(selectedCategory);
    }

    render() {
        const { categories, category } = this.props;
        return (
            <nav className={styles['header-navigation']}>
                <ul className={styles['nav-list-Container']}>
                    {categories.map(LocalCategory => (
                        <Link key={LocalCategory.name} to='/' className={styles['nav-item']}>
                            <li
                                onClick={() => this.filterCategoriesHandler(LocalCategory.name)}
                                className={`${styles['nav-item']} ${category.name === LocalCategory.name && styles.active}`}
                            >
                                {LocalCategory.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
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
        storeSelectedCategory: (payload) => dispatch(storeSelectedCategory(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);