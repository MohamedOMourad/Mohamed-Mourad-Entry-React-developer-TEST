//React Component
import { Component } from "react";

//CSS
import styles from './CurrencyIcon.module.css';

//dropdown-arrow icon
import arrow from '../../../../../assets/dropdown-arrow.svg';

class CurrencyIcon extends Component {
    render() {
        const { selectedCurrency, currenciesIsOpen } = this.props

        return (
            <div className={styles['selected-currency']}>
                {selectedCurrency && <span>{selectedCurrency.symbol || selectedCurrency.symbol}</span>}
                <img className={`${styles['dropdown-arrow']}  ${currenciesIsOpen && styles.rotate}`} src={arrow} alt='dropdown arrow' />
            </div>
        )
    }
}

export default CurrencyIcon;