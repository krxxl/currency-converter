import {createAsyncThunk, createSlice, createDraftSafeSelector} from '@reduxjs/toolkit';
import {DASHBOARD_INIT} from 'constants/actionTypes';
import {getCurrencies} from 'reducer/currency/getAvilableCurrencies';
import {getOneToAll} from 'reducer/currency/getOneToAll';

// Создание основного селектора (путь до вашего reducer)
const selector = (state) => state.dashboard;
// Создание селекторов для reducer
export const selectIsLoadingDashboard = createDraftSafeSelector([selector], (selector) => selector.isLoading);

// Создание thunk для reducer
export const initDashboard = createAsyncThunk(DASHBOARD_INIT, async (_, {dispatch, getState}) => {
  await Promise.all([
    dispatch(getCurrencies()),
    dispatch(getOneToAll()),
  ]);
});

// Init самого reducer
const dashboardReducer = createSlice({
  name: 'DASHBOARD',
  initialState: {
    isLoading: true,
  },
  reducers: {},
  extraReducers: {
    [initDashboard.pending]: (state) => {
      state.isLoading = true;
    },
    [initDashboard.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [initDashboard.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export reducer
export default dashboardReducer.reducer;
