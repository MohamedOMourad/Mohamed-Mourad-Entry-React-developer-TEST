import { Component } from "react";
import styles from './Description.module.css';
import parse from 'html-react-parser';


class ProductDescription extends Component {
    render() {
        const description = parse(this.props.description)
        console.log(this.props.description);
        console.log(description);
        return (
            <div className={styles['product-description']}>
                {description}
            </div>
        )
    }
}

export default ProductDescription;