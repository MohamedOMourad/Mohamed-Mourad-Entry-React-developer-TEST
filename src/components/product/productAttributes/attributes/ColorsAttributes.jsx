import { Component } from "react";
import styles from './ColorsAttributes.module.css';

class ColorsAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: props.colors[0].value
        }
    }

    selectColorHandler(selectedColor) {
        this.setState({ activeColor: selectedColor })
    }

    render() {
        const { colors } = this.props
        const { activeColor } = this.state
        return (
            <div className={styles['items-container']}>
                {colors.map(color => (
                    <div key={color.id}
                        className={`${styles['color-container']} ${color.value === activeColor && styles.active}`}
                        onClick={() => this.selectColorHandler(color.value)}
                    >
                        <div style={{ backgroundColor: `${color.value}` }} className={styles['color']} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ColorsAttributes;