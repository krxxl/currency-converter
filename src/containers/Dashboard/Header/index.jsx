import React, {useState} from 'react';
import './index.scss';
import navigation from 'constants/navigation';
import NavItem from 'components/Dashboard/Header/NavItem';
import {useMediaQuery} from 'react-responsive';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 640px)',
  });

  const closeMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    document.getElementsByTagName('html')[0].classList.contains('menu-opened') ?
        document.getElementsByTagName('html')[0].classList.remove('menu-opened') :
        document.getElementsByTagName('html')[0].classList.add('menu-opened');
  };

  return (
      <header className='header'>
        <div className='header__wrapper'>
          <h1 className='header__title'>Курсы валют</h1>
          {isDesktopOrLaptop ? (
              <ul className='header__nav navigation'>
                {
                  navigation.map(value => <NavItem exact={value.exact} label={value.label} to={value.to}
                                                   key={value.key}/>)
                }
              </ul>
          ) : (
              <>
                <button aria-label='menu-btn' onClick={closeMenu} className='header__burger'/>
                {isMenuOpen ? (
                    <div className='header__nav-wrp'>
                      <ul className='header__nav navigation--mobile navigation'>
                        {
                          navigation.map(value => <NavItem onClick={closeMenu} exact={value.exact} label={value.label} to={value.to}
                                                           key={value.key}/>)
                        }
                      </ul>
                    </div>
                ) : null}
              </>
          )}

        </div>
      </header>
  );
};

export default Header;
