import React from 'react';
import './index.scss';
import classNames from 'classnames';

const Table = ({className = '', children, ...otherProps}) => {
  return (
    <table
      className={classNames('table', {
        [className]: className,
      })}
      cellSpacing='0'
      {...otherProps}>
      {children}
    </table>
  );
};

export default Table;
