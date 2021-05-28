import React from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

const Popup = ({children}) => {
  return createPortal(<div>{children}</div>, document.getElementById('popup'));
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popup;
