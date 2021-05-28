import {combineReducers} from 'redux';
import dashboardReducer from 'reducer/dashboard';
import currencyReducer from 'reducer/currency';

export const rootReducer = combineReducers({
  currency: currencyReducer,
  dashboard: dashboardReducer,
});
