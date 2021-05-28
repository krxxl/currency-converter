import {api} from 'api/index';

export default function getCurrencyConverterRequest({
  from = null,
  to = null,
  amount = null,
}) {
  return api.get('/convert', {
    params: {
      format: 'json',
      from,
      to,
      amount,
    },
  });
}
