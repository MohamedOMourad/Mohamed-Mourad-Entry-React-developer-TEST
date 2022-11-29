//React Component
import { Component } from "react";

//CSS
import styles from './Attributes.module.css';

class Attributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAttribute: this.props.selectedAttribute
        }
    }

    selectedValueHandler(selectedValue) {
        const { updateItemAttributes, product } = this.props;
        const { activeAttribute } = this.state

        updateItemAttributes({ productId: product.id, uniqueId: product.uniqueId, oldVal: activeAttribute, newVal: selectedValue })
        this.setState({ activeAttribute: selectedValue })
    }

    render() {
        const { attributes } = this.props;
        const { activeAttribute } = this.state;
        return (
            <div className={styles['items-container']}>
                {activeAttribute && attributes.map(attribute => (
                    <div key={attribute.id} className={`${styles.attribute} ${attribute.value === activeAttribute.value && styles.active}`}
                        onClick={() => this.selectedValueHandler(attribute)}
                    >
                        {attribute.value}
                    </div>
                ))}
            </div>
        )
    }
}

export default Attributes;