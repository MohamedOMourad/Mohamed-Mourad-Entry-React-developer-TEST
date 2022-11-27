import { Component } from "react";
import styles from './ColorAttribute.module.css';

class ColorAttribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: props.selectedColor
        }
    }

    selectColorHandler(selectedColor) {
        const { updateItemColor, productId } = this.props;
        updateItemColor({ productId, newVal: selectedColor })
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