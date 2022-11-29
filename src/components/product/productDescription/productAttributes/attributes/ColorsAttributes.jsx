//React Component
import { Component } from "react";

//CSS
import styles from './ColorsAttributes.module.css';

//React-redux
import { connect } from "react-redux";
import { selectColor } from '../../../../../redux/features/product/productSlice';

class ColorsAttributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeColor: this.props.colors[0]
        }
    }
    componentDidMount() {
        const { selectColor, colors } = this.props;
        selectColor(colors[0])
    }

    selectColorHandler(selectedValue) {
        const { selectColor } = this.props;
        selectColor(selectedValue);
        this.setState({ activeColor: selectedValue });
    }


    render() {
        const { colors } = this.props;
        const { activeColor } = this.state;
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

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectColor: (payload) => dispatch(selectColor(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsAttributes);