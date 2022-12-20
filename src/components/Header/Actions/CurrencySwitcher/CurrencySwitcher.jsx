//React Component
import { Component } from "react";
import CurrenciesList from "./currenciesList/CurrenciesList";
import CurrencyIcon from "./currencyIcon/CurrencyIcon";

//CSS
import styles from "./CurrencySwitcher.module.css";

//react-redux
import { connect } from "react-redux";
import {
 addCurrencies,
 selectCurrency,
} from "../../../../redux/features/currency/currencySlice";
import { selectCurrencyIndex } from "../../../../redux/features/currency/currencySlice";

//Graphql
import { getCurrencies } from "../../../../utils/graphql";

export class CurrencySwitcher extends Component {
 constructor(props) {
  super(props);
  this.state = {
   currenciesIsOpen: false,
  };
 }

 componentDidMount() {
  try {
   (async () => {
    const currencies = await getCurrencies();
    this.props.addCurrencies(currencies);
    //make first currency in the list default one if local storage is null
    const currencyIndex = localStorage.getItem("currencyIndex");
    this.props.selectCurrencyIndex(currencyIndex ? currencyIndex : 0);
    this.props.selectCurrency();
   })();
  } catch (error) {
   console.log(error);
  }
 }

 openDropDownListHandler = () => {
  this.setState((prevState) => ({
   currenciesIsOpen: !prevState.currenciesIsOpen,
  }));
 };

 selectCurrencyIndexHandler(selectedCurrencyIndex) {
  this.props.selectCurrencyIndex(selectedCurrencyIndex);
  this.props.selectCurrency();
 }

 render() {
  const { currencies, selectedCurrency } = this.props;
  const { currenciesIsOpen } = this.state;
  return (
   <div
    className={styles["drop-down-list"]}
    onClick={this.openDropDownListHandler}
   >
    <CurrencyIcon
     selectedCurrency={selectedCurrency}
     currenciesIsOpen={currenciesIsOpen}
    />
    {currenciesIsOpen && (
     <CurrenciesList
      currencies={currencies}
      selectedCurrency={selectedCurrency}
      selectCurrencyIndexHandler={this.selectCurrencyIndexHandler.bind(this)}
     />
    )}
   </div>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  currencies: state.Currency.currencies,
  selectedCurrency: state.Currency.selectedCurrency,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  addCurrencies: (payload) => dispatch(addCurrencies(payload)),
  selectCurrencyIndex: (payload) => dispatch(selectCurrencyIndex(payload)),
  selectCurrency: (payload) => dispatch(selectCurrency(payload)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
