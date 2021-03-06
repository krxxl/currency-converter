import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';
import PropTypes from 'prop-types';

const NavItem = ({label, onClick = () => null, to, exact}) => {
  return (
    <li onClick={onClick} className='navigation__item'><NavLink exact={exact} className='navigation__link' activeClassName='navigation__link--active' to={to}>{label}</NavLink></li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavItem;
