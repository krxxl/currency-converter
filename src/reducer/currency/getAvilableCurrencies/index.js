import {CURRENCY_GET_AVAILABLE} from 'constants/actionTypes';
import {createAsyncThunk, createDraftSafeSelector, createSlice} from '@reduxjs/toolkit';
import {getAvailableCurrencyRequest} from 'api/currency';

const selector = (state) => state.currency.getCurrencies;

export const selectCurrencies = createDraftSafeSelector([selector], (state) => state.data);

export const getCurrencies = createAsyncThunk(CURRENCY_GET_AVAILABLE, async (_, {rejectWithValue}) => {
  try {
    const response = await getAvailableCurrencyRequest();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const getCurrenciesSlice = createSlice({
  name: 'CURRENCIES',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCurrencies.pending]: (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },
    [getCurrencies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getCurrencies.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default getCurrenciesSlice.reducer;