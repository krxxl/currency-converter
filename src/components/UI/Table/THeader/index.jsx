import React from 'react';
import './index.scss';
import classNames from 'classnames';

const THeader = ({className = '', children, ...otherProps}) => {
  return (
    <thead
      className={classNames('table__header', {
        [className]: className,
      })}
      {...otherProps}>
      {children}
    </thead>
  );
};

export default THeader;
