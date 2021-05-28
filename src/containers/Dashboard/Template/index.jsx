import React from 'react';
import Header from 'containers/Dashboard/Header';
import './index.scss';

const Template = ({children}) => {
  return (
      <>
        <Header />
        <div className='template'>
          {children}
        </div>
      </>
  );
};

export default Template;
