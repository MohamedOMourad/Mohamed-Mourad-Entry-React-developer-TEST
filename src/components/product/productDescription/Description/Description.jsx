////React Component
import { Component } from "react";

//CSS
import styles from './Description.module.css';

//HTML parser
import parse from 'html-react-parser';


class ProductDescription extends Component {
    render() {
        const description = parse(this.props.description)
        return (
            <div className={styles['product-description']}>
                {description}
            </div>
        )
    }
}

export default ProductDescription;