import React from 'react';
import './index.scss';
import Table from 'components/UI/Table';
import TRow from 'components/UI/Table/TRow';
import TCell from 'components/UI/Table/TCell';
import THeader from 'components/UI/Table/THeader';
import TBody from 'components/UI/Table/TBody';
import {useSelector} from 'react-redux';
import {selectOneToAll} from 'reducer/currency/getOneToAll';
import RatesForm from 'containers/Pages/RatesPage/RatesForm';

const RatesPage = () => {
  const rates = useSelector(selectOneToAll);

  const header = [
    {
      name: 'Код',
      id: 1
    },
    {
      name: 'Валюта',
      id: 2
    },
    {
      name: 'Курс',
      id: 3
    }
  ];

  return (
      <section className='rates block'>
        <div className='rates__header'>
          <h2>Текущие курсы валют</h2>
          <RatesForm/>
        </div>

        <Table className='rates__table'>
          <THeader>
            <TRow>
              {header.map(item => <TCell key={item.id} header>{item.name}</TCell>)}
            </TRow>
          </THeader>
          <TBody>
            {rates.length ? rates.map(rate => {
              return (
                  <TRow key={rate.shortName}>
                    <TCell>{rate.shortName}</TCell>
                    <TCell>{rate.name}</TCell>
                    <TCell>{rate.value}</TCell>
                  </TRow>
              )
            }) : null}
          </TBody>
        </Table>
      </section>
  );
};

export default RatesPage;
