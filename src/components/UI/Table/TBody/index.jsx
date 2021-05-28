import React from 'react';
import './index.scss';
import classNames from 'classnames';

const TBody = ({className = '', children, ...otherProps}) => {
  return (
    <tbody
      className={classNames('table__body', {
        [className]: className,
      })}
      {...otherProps}>
      {children}
    </tbody>
  );
};

export default TBody;
