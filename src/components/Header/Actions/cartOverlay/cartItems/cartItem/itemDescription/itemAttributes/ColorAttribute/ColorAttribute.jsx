//React Component
import { Component } from "react";

//CSS
import styles from './ColorAttribute.module.css';

class ColorAttribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: this.props.selectedColor
        }
    }

    selectColorHandler(selectedColor) {
        const { updateItemColor, product } = this.props;
        updateItemColor({ productId: product.id, uniqueId: product.uniqueId, newVal: selectedColor })
        this.setState({ activeColor: selectedColor })
    }

    render() {
        const { colors } = this.props
        const { activeColor } = this.state
        return (
            <div className={styles['items-container']}>
                {colors.map(color => (
                    <div key={color.id}
                        className={`${styles['color-container']} ${color.value === activeColor.value && styles.active}`}
                        onClick={() => this.selectColorHandler(color)}
                    >
                        <div style={{ backgroundColor: `${color.value}` }} className={styles['color']} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ColorAttribute;