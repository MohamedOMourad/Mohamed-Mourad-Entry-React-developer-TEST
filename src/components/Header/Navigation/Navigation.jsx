import { Component } from "react";
import { connect } from "react-redux";
import { storeSelectedCategory } from "../../../redux/features/category/categorySlice";
import styles from './Navigation.module.css';
export class Navigation extends Component {
    filterCategoriesHandler(selectedCategory) {
        this.props.storeSelectedCategory(selectedCategory);
    }

    render() {
        const { categories, category } = this.props;
        return (
            <nav className={styles['header__navigation']}>
                <ul className={styles['nav-list']}>
                    {categories.map(LocalCategory => (
                        <li
                            onClick={() => this.filterCategoriesHandler(LocalCategory.name)}
                            className={`${styles['nav-item']} ${category.name === LocalCategory.name && styles.active}`}
                            key={LocalCategory.name}>
                            {LocalCategory.name.toUpperCase()}
                        </li>
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