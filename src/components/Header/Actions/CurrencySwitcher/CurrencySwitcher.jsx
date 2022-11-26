import { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../../../utils/graphql';
import { addCurrencies, selectCurrency } from '../../../../redux/features/currency/currencySlice';
import { selectCurrencyIndex } from '../../../../redux/features/currency/currencySlice';
import styles from './CurrencySwitcher.module.css';
import CurrenciesList from './currenciesList/CurrenciesList';
import CurrencyIcon from './currencyIcon/CurrencyIcon';

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
            //make first currency in the list default one
            this.props.selectCurrencyIndex(0)
            this.props.selectCurrency()
        })()
    }

    openDropDownListHandler = () => {
        this.setState((prevState) => ({ currenciesIsOpen: !prevState.currenciesIsOpen }))
    }

    selectCurrencyIndexHandler(selectedCurrencyIndex) {
        this.props.selectCurrencyIndex(selectedCurrencyIndex);
        this.props.selectCurrency();
    }

    render() {
        const { currencies, selectedCurrency } = this.props;
        const { currenciesIsOpen } = this.state;
        return (
            <div className={styles['drop-down-list']} onClick={this.openDropDownListHandler}>
                <CurrencyIcon selectedCurrency={selectedCurrency} currenciesIsOpen={currenciesIsOpen} />
                {currenciesIsOpen && <CurrenciesList currencies={currencies} selectedCurrency={selectedCurrency} selectCurrencyIndexHandler={this.selectCurrencyIndexHandler.bind(this)} />}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.Currency.currencies,
        selectedCurrency: state.Currency.selectedCurrency,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addCurrencies: (payload) => dispatch(addCurrencies(payload)),
        selectCurrencyIndex: (payload) => dispatch(selectCurrencyIndex(payload)),
        selectCurrency: (payload) => dispatch(selectCurrency(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);