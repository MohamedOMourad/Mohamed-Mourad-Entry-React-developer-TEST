import { Component } from "react";
import styles from './CurrenciesList.module.css'

class CurrenciesList extends Component {
    render() {
        const { currencies, selectedCurrency, selectCurrencyIndexHandler } = this.props
        return (
            <div className={styles['currency-list-container']}>
                <ul className={`${styles['currencies-list']}`}>
                    {currencies.map((currency, index) => (
                        <li
                            onClick={() => selectCurrencyIndexHandler(index)}
                            className={`${styles['currency-list']} ${currency.label === selectedCurrency.label && styles.active}`}
                            key={currency.label}>
                            {`${currency.symbol} ${currency.label}`}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CurrenciesList;