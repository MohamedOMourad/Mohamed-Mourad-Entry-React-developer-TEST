//React Component
import { Component } from "react";

//CSS
import styles from './ItemImage.module.css';

//Icon
import sliderArrow from '../../../../../assets/slider-arrow.svg';

class ItemImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImageIndex: 0
        }
    }

    rightArrowSLiderHandler() {
        this.setState((prevVal) => ({ activeImageIndex: prevVal.activeImageIndex + 1 }))
    }

    leftArrowSLiderHandler() {
        this.setState((prevVal) => ({ activeImageIndex: prevVal.activeImageIndex - 1 }))
    }

    render() {
        const { gallery } = this.props;
        const { activeImageIndex } = this.state
        return (
            <div style={{ backgroundImage: `url(${gallery[activeImageIndex]})` }} className={styles.image} >
                <div className={styles['slider-container']}>

                    <div className={`${styles['left-arrow']} ${activeImageIndex <= 0 && styles.hidden}`} onClick={this.leftArrowSLiderHandler.bind(this)}>
                        <img src={sliderArrow} alt="sliderArrow" />
                    </div>

                    <div className={`${styles['right-arrow']} ${activeImageIndex >= gallery.length - 1 && styles.hidden}`} onClick={this.rightArrowSLiderHandler.bind(this)}>
                        <img src={sliderArrow} alt="sliderArrow" />
                    </div>

                </div>
            </div>
        )
    }
}

export default ItemImage;
