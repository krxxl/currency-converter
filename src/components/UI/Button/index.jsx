import {Link} from 'react-router-dom';
import React from 'react';
import './index.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick = () => null,
  className = '',
  to,
  big,
  ...otherProps
}) => {
  const classes = classNames(
    'btn ' + className,
    {'btn--big': big},
  );
  return to ? (
    <Link to={to} onClick={onClick} className={classes} {...otherProps}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classes} {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
