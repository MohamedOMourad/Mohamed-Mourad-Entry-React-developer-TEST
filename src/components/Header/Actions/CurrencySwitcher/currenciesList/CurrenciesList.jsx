import { Component } from "react";
import styles from './CurrenciesList.module.css'

class CurrenciesList extends Component {
    render() {
        const { currencies, currency, selectCurrencyHandler } = this.props
        return (
            <div className={styles['currency-list-container']}>
                <ul className={`${styles['currencies-list']}`}>
                    {currencies.map(localCurrency => (
                        <li
                            onClick={() => selectCurrencyHandler(localCurrency)}
                            className={`${styles['currency-list']} ${localCurrency.label === currency.label && styles.active}`}
                            key={localCurrency.label}>
                            {`${localCurrency.symbol} ${localCurrency.label}`}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CurrenciesList;