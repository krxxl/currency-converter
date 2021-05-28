import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({type = 'text', className, error, ...otherProps}) => (
  <input type={type} className={classNames('input', {[className]: className, 'input--error': error})} {...otherProps} />
);

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
