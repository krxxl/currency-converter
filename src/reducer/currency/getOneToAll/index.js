import {CURRENCY_GET_ONE_TO_ALL} from 'constants/actionTypes';
import {createAsyncThunk, createDraftSafeSelector, createSlice} from '@reduxjs/toolkit';
import {getOneToAllRequest, getAvailableCurrencyRequest} from 'api/currency';

const selector = (state) => state.currency.getOneToAll;

export const selectIsLoadingOneToAll = createDraftSafeSelector([selector], (state) => state.isLoading);
export const selectOneToAll = createDraftSafeSelector([selector], (state) => state.data);
export const selectOneToAllFilters = createDraftSafeSelector([selector], (state) => state.filter);

export const getOneToAll = createAsyncThunk(CURRENCY_GET_ONE_TO_ALL, async (_, {getState, rejectWithValue}) => {
  try {
    const filter = selectOneToAllFilters(getState());
    const response = await Promise.all([
      getOneToAllRequest({
        symbols: filter.symbols,
        base: filter.base
      }),
      getAvailableCurrencyRequest()
    ]);

    response[0].data.map(rate => {
      response[1].data.forEach(option => {
        if (option.value === rate.shortName) {
          rate.name = option.label
        }
      });
      return rate;
    });
    return response[0].data
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const getOneToAllSlice = createSlice({
  name: 'CURRENCY-LATEST',
  initialState: {
    data: [],
    filter: {
      symbols: 'AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BRL,BSD,BTC,BTN,BWP,BYN,BYR,BZD,CAD,CDF,CHF,CLF,CLP,CNY,COP,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EGP,ERN,ETB,EUR,FJD,FKP,GBP,GEL,GGP,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,IMP,INR,IQD,IRR,ISK,JEP,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LTL,LVL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRO,MUR,MVR,MWK,MXN,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PLN,PYG,QAR,RON,RSD,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SLL,SOS,SRD,STD,SVC,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VND,VUV,WST,XAF,XAG,XAU,XCD,XDR,XOF,XPF,YER,ZAR,ZMK,ZMW,ZWL',
      base: 'RUB'
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
    [getOneToAll.pending]: (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },
    [getOneToAll.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getOneToAll.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {changeFilter} = getOneToAllSlice.actions;
export default getOneToAllSlice.reducer;