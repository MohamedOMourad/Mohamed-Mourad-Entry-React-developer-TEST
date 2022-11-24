import { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../../../utils/graphql';
import { addCurrencies, selectCurrency } from '../../../../redux/features/currency/currencySlice';
import styles from './CurrencySwitcher.module.css';
import arrow from '../../../../assets/dropdown-arrow.svg'

export class CurrencySwitcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currenciesIsOpen: false
        }
    }

    componentDidMount() {
        (async () => {
            const currencies = await getCurrencies();
            this.props.addCurrencies(currencies);
            this.props.selectCurrency(currencies[0])
        })()
    }

    openDropDownListHandler = () => {
        this.setState((prevState) => ({ currenciesIsOpen: !prevState.currenciesIsOpen }))
    }

    selectCurrencyHandler(selectedCurrency) {
        this.props.selectCurrency(selectedCurrency)
    }

    render() {
        const { currencies, currency } = this.props;
        const { currenciesIsOpen } = this.state;
        return (
            <div className={styles['drop-down-list']} onClick={this.openDropDownListHandler}>
                <div className={styles['selected-currency']}>
                    {currencies.length > 0 && <span>{currency.symbol || currencies[0].symbol}</span>}
                    <img className={`${styles['dropdown-arrow']}  ${currenciesIsOpen && styles.rotate}`} src={arrow} alt='dropdown arrow' />
                </div>
                {currenciesIsOpen &&
                    <div className={styles['currency-list-container']}>
                        <ul  className={`${styles['currencies-list']}`}>
                            {currencies.map(localCurrency => (
                                <li
                                    onClick={() => this.selectCurrencyHandler(localCurrency)}
                                    className={`${styles['currency-list']} ${localCurrency.label === currency.label && styles.active}`}
                                    key={localCurrency.label}>
                                    {`${localCurrency.symbol} ${localCurrency.label}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.Currency.currencies,
        currency: state.Currency.currency
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addCurrencies: (payload) => dispatch(addCurrencies(payload)),
        selectCurrency: (payload) => dispatch(selectCurrency(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);