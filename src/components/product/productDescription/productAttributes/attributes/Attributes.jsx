import { Component } from "react";
import { connect } from "react-redux";
import styles from './Attributes.module.css'
import { selectAttribute } from '../../../../../redux/features/product/productSlice';
class Attributes extends Component {

    componentDidMount() {
        const { selectAttribute, attributes } = this.props;
        selectAttribute({ oldVal: attributes[0], newVal: attributes[0] })// make first attribute default one
    }

    selectAttributeHandler(selectedValue) {
        const { selectAttribute, selectedAttribute } = this.props;
        selectAttribute({ oldVal: selectedAttribute, newVal: selectedValue })
    }

    render() {
        const { attributes, selectedAttribute } = this.props
        return (
            <div className={styles['items-container']}>
                {selectedAttribute &&
                    attributes.map(attribute => (
                        <div key={attribute.id} className={`${styles.attribute} ${attribute.value === selectedAttribute.value && styles.active}`}
                            onClick={() => this.selectAttributeHandler(attribute)}
                        >
                            {attribute.value}
                        </div>
                    ))}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selectedAttributes: state.Product.selectedAttributes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAttribute: (payload) => dispatch(selectAttribute(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);