////React Component
import { Component } from "react";

//CSS
import styles from "./Description.module.css";

//HTML parser
import { Markup } from "interweave";

class ProductDescription extends Component {
 render() {
  const description = this.props.description;
  return (
   <div className={styles["product-description"]}>
    <Markup content={description} />
   </div>
  );
 }
}

export default ProductDescription;
