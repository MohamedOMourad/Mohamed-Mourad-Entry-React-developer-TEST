//React Component
import { Component } from 'react'
import Header from './components/Header/Header';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

//Router
import { Switch, Route, } from "react-router-dom";

//Graphql
import { getCategories } from './utils/graphql';

//Redux
import { connect } from "react-redux";
import { storeCategories, storeSelectedCategory } from './redux/features/category/categorySlice';

export class App extends Component {

  // componentDidMount() {
  //   try {
  //     //get all categories's products
  //     (async () => {
  //       const categories = await getCategories();
  //       this.props.storeCategories(categories)
  //       this.props.storeSelectedCategory('all') //make default category is all products
  //     })()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route path="/cart" >
            <Cart />
          </Route>
          <Route path="/product/:id" children={<Product />} />
        </Switch>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
