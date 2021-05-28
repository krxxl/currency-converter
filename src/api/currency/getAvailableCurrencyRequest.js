import {api} from 'api/index';

export default function getAvailableCurrenciesRequest() {
  return api.get(`/symbols`, {
    transformResponse: [
      (data) => {
        return Object
            .entries(data.symbols)
            .map(entry => ({value: entry[0], label: entry[1]}));
      },
    ],
  });
}
