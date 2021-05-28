import React from 'react';
import './index.scss';
import navigation from 'constants/navigation';
import NavItem from 'components/Dashboard/Header/NavItem';

const Header = () => {
  return (
      <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>Курсы валют</h1>
          <ul className='header__nav navigation'>
            {
              navigation.map(value => <NavItem exact={value.exact} label={value.label} to={value.to} key={value.key}/>)
            }
          </ul>
        </div>
      </header>
  );
};

export default Header;
