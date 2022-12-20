//React Component
import { Component } from 'react'
import Header from './components/Header/Header';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

//Router
import { Switch, Route, } from "react-router-dom";

export class App extends Component {

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

export default App ;
