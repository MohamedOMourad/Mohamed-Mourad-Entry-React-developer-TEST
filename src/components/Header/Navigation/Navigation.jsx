//React Component
import { Component } from "react";

//CSS
import styles from "./Navigation.module.css";

//react-redux
import { connect } from "react-redux";
import {
 storeCategories,
 storeSelectedCategory,
} from "../../../redux/features/category/categorySlice";

//react-router-dom
import { Link } from "react-router-dom";

//Graphql
import { getCategories, getCategory } from "../../../utils/graphql";

export class Navigation extends Component {
 componentDidMount() {
  try {
   const searchParams = new URLSearchParams(document.location.search);
   const categoryId = searchParams.get("category");

   //get all categories's products
   (async () => {
    const categories = await getCategories();
    const category = await getCategory(categoryId||"all");
    this.props.storeCategories(categories);
    this.props.storeSelectedCategory(category); //make default category is all products
   })();
  } catch (error) {
   console.log(error);
  }
 }

 filterCategoriesHandler(selectedCategory) {
  try {
   (async () => {
    const category = await getCategory(selectedCategory);
    this.props.storeSelectedCategory(category);
   })();
  } catch (error) {
   console.log(error);
  }
 }

 render() {
  const { categories, category } = this.props;
  return (
   <nav className={styles["header-navigation"]}>
    <ul className={styles["nav-list-Container"]}>
     {categories.map((LocalCategory) => (
      <Link
       key={LocalCategory.name}
       to={`/?category=${LocalCategory.name}`}
       className={styles["nav-item"]}
      >
       <li
        onClick={() => this.filterCategoriesHandler(LocalCategory.name)}
        className={`${styles["nav-item"]} ${
         category.name === LocalCategory.name && styles.active
        }`}
       >
        {LocalCategory.name}
       </li>
      </Link>
     ))}
    </ul>
   </nav>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  categories: state.Category.categories,
  category: state.Category.category,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  storeCategories: (payload) => dispatch(storeCategories(payload)),
  storeSelectedCategory: (payload) => dispatch(storeSelectedCategory(payload)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
