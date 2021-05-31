import React, {useEffect} from 'react';
import './index.scss';
import SelectBox from 'components/Form/Select';
import {Formik, Form, Field} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {selectCurrencies} from 'reducer/currency/getAvilableCurrencies';
import Input from 'components/Form/Input';
import useDebounce from 'hooks/useDebounce';
import {
  getCurrencyConverter,
  selectCurrencyConverter,
  changeFilter,
  selectIsLoadingCurrencyConverter
} from 'reducer/currency/getCurrencyConverter';
import Loader from 'components/UI/Loader';

const ConverterPage = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectCurrencies);
  const data = useSelector(selectCurrencyConverter);
  const isLoading = useSelector(selectIsLoadingCurrencyConverter);

  const onSubmit = ({from, to, amount}, {setSubmitting}) => {
    dispatch(changeFilter({from: from.value, to: to.value, amount}));
    dispatch(getCurrencyConverter()).then(setSubmitting(false))
  };

  const submitOnChange = useDebounce((evt, form) => {
    form.handleSubmit()
  }, 750);

  useEffect(() => {
    dispatch(getCurrencyConverter())
  }, [dispatch]);

  return (
      <section className='converter block'>
        <h2>Конвертор валют</h2>
        <Formik initialValues={{
          from: options.find(currency => currency.value === 'RUB'),
          to: options.find(currency => currency.value === 'EUR'),
          amount: 1
        }
        } onSubmit={onSubmit}>
          {props => {
            return (
                <Form className='converter__form'>
                  <div className='converter__flex'>
                    <div className='converter__currency-from'>
                      У меня есть
                      <Field name='from'
                             width={250}
                             component={SelectBox}
                             options={options}
                             onChange={props.handleSubmit}
                             className='converter__select'
                      />
                    </div>
                    <div className='converter__currency-to'>
                      Хочу приобрести
                      <Field name='to'
                             width={250}
                             component={SelectBox}
                             options={options}
                             onChange={props.handleSubmit}
                             className='converter__select'
                      />
                    </div>
                  </div>
                  <div className='converter__flex'>
                    <Field onChange={submitOnChange} component={Input} name='amount' className='converter__amount'
                           placeholder='Введите количество'/>
                    <div className='converter__value'>
                      <span>Итого</span>
                      <Loader isLoading={isLoading}>
                        <span>{data?.result}</span>
                      </Loader>
                    </div>
                  </div>
                </Form>
            )
          }}
        </Formik>

      </section>
  );
};

export default ConverterPage;
