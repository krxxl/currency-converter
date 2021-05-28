import {CURRENCY_GET_CONVERTER} from 'constants/actionTypes';
import {createAsyncThunk, createDraftSafeSelector, createSlice} from '@reduxjs/toolkit';
import {getCurrencyConverterRequest} from 'api/currency';

const selector = (state) => state.currency.getCurrencyConverter;

export const selectIsLoadingCurrencyConverter = createDraftSafeSelector([selector], (state) => state.isLoading);
export const selectCurrencyConverter = createDraftSafeSelector([selector], (state) => state.data);
export const selectCurrencyConverterFilters = createDraftSafeSelector([selector], (state) => state.filter);

export const getCurrencyConverter = createAsyncThunk(CURRENCY_GET_CONVERTER, async (_, {getState, rejectWithValue}) => {
  try {
    const filter = selectCurrencyConverterFilters(getState());
    const response = await getCurrencyConverterRequest({
      from: filter.from,
      to: filter.to,
      amount: filter.amount
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const getCurrencyConverterSlice = createSlice({
  name: 'CURRENCY-CONVERTER',
  initialState: {
    data: null,
    filter: {
      from: 'RUB',
      to: 'EUR',
      amount: 1
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = {...state.filter, ...action.payload};
    },
  },
  extraReducers: {
    [getCurrencyConverter.pending]: (state) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    [getCurrencyConverter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getCurrencyConverter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {changeFilter} = getCurrencyConverterSlice.actions;
export default getCurrencyConverterSlice.reducer;