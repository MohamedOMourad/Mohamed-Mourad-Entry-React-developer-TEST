import { Component } from "react";
import { connect } from "react-redux";
import styles from './ColorsAttributes.module.css';
import { selectColor } from '../../../../../redux/features/product/productSlice';

class ColorsAttributes extends Component {

    componentDidMount() {
        const { selectColor, colors } = this.props;
        selectColor(colors[0])// make first color default one
    }

    render() {
        const { colors, selectColor, selectedColor } = this.props;
        console.log(selectedColor)
        return (
            <div className={styles['items-container']}>
                {selectedColor && colors.map(color => (
                    <div key={color.id}
                        className={`${styles['color-container']} ${color.value === selectedColor.value && styles.active}`}
                        onClick={() => selectColor(color)}
                    >
                        <div style={{ backgroundColor: `${color.value}` }} className={styles['color']} />
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedColor: state.Product.selectedColor,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectColor: (payload) => dispatch(selectColor(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorsAttributes);