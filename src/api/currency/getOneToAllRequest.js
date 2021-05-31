import {api} from 'api/index';

export default function getOneToAllRequest({
  symbols = null,
  base = null,
}) {
  return api.get('/latest', {
    params: {
      symbols,
      base
    },
    transformResponse: [
      (data) => {
        return Object
            .entries(data.rates)
            .map(entry => ({shortName: entry[0], value: entry[1]}));

      },
    ],
  });
}
