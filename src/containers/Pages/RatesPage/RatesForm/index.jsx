import React from 'react';
import './index.scss';
import {Field, Form, Formik} from 'formik';
import SelectBox from 'components/Form/Select';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrencies} from 'reducer/currency/getAvilableCurrencies';
import {changeFilter, getOneToAll} from 'reducer/currency/getOneToAll';

const RatesForm = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectCurrencies);
  const onSubmit = ({curCurrency}, {setSubmitting}) => {
    const symbols = options.filter(item => item.value !== curCurrency.value).map(item => {return item.value}).toString();
    dispatch(changeFilter({base: curCurrency.value, symbols}));
    dispatch(getOneToAll()).then(setSubmitting(false))
  };

  return (
      <Formik initialValues={{
        curCurrency: options.find(currency => currency.value === 'RUB'),
      }
      } onSubmit={onSubmit}>
        {props => {
          return (
              <Form className='rates__form'>

                <div className='rates__currency'>
                  Выберите валюту
                  <Field name='curCurrency'
                         width={250}
                         component={SelectBox}
                         options={options}
                         onChange={props.handleSubmit}
                         className='rates__select'
                  />
                </div>
              </Form>
          )
        }}
      </Formik>

  );
};

export default RatesForm;
