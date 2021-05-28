import {combineReducers} from 'redux';
import getCurrenciesReducer from 'reducer/currency/getAvilableCurrencies';
import getCurrencyConverterReducer from 'reducer/currency/getCurrencyConverter';
import getOneToAllReducer from 'reducer/currency/getOneToAll';

const currencyReducer = combineReducers({
  getCurrencies: getCurrenciesReducer,
  getCurrencyConverter: getCurrencyConverterReducer,
  getOneToAll: getOneToAllReducer,
});

export default currencyReducer;
