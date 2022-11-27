import { Component } from "react";
import styles from './Attributes.module.css';

class Attributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeValue: props.selectedAttribute
        }
    }

    selectedValueHandler(selectedValue) {
        const { updateItemAttributes, productId } = this.props;
        const { activeValue } = this.state

        updateItemAttributes({ productId, oldVal: activeValue, newVal: selectedValue })

        this.setState({ activeValue: selectedValue })
    }

    render() {
        const { attributes } = this.props
        const { activeValue } = this.state
        return (
            <div className={styles['items-container']}>
                {attributes.map(attribute => (
                    <div key={attribute.id} className={`${styles.attribute} ${attribute.value === activeValue.value && styles.active}`}
                        onClick={() => { this.selectedValueHandler(attribute) }}
                    >
                        {attribute.value}
                    </div>
                ))}
            </div>
        )
    }
}

export default Attributes;