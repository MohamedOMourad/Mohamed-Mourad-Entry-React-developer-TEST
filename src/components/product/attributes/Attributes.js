import { Component } from "react";
import styles from './Attributes.module.css'

class SizesAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeValue: props.attributes[0].value
        }
    }

    selectedValueHandler(selectedValue) {
        this.setState({ activeValue: selectedValue })
    }

    render() {
        const { attributes } = this.props
        const { activeValue } = this.state
        return (
            <div className={styles['items-container']}>
                {attributes.map(attribute => (
                    <div key={attribute.id} className={`${styles.attribute} ${attribute.value === activeValue && styles.active}`}
                        onClick={() => this.selectedValueHandler(attribute.value)}
                    >
                        {attribute.value}
                    </div>
                ))}
            </div>
        )
    }
}

export default SizesAttributes;