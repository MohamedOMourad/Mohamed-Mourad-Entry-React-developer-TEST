//React Component
import { Component } from "react";

//CSS
import styles from './Attributes.module.css';

//React-redux
import { connect } from "react-redux";
import { selectAttribute } from '../../../../../redux/features/product/productSlice';

class Attributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAttribute: this.props.attributes[0]
        }
    }

    componentDidMount() {
        const { selectAttribute, attributes } = this.props;
        selectAttribute({ oldVal: attributes[0], newVal: attributes[0] })
    }

    selectAttributeHandler(selectedValue) {
        const { selectAttribute } = this.props;
        const { activeAttribute } = this.state;
        selectAttribute({ oldVal: activeAttribute, newVal: selectedValue })
        this.setState({ activeAttribute: selectedValue })
    }

    render() {
        const { attributes } = this.props;
        const { activeAttribute } = this.state;
        return (
            <div className={styles['items-container']}>
                {
                    attributes.map(attribute => (
                        <div key={attribute.id} className={`${styles.attribute} ${attribute.value === activeAttribute.value && styles.active}`}
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
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAttribute: (payload) => dispatch(selectAttribute(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Attributes);