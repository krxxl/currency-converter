import React from 'react';
import './index.scss';
import classNames from 'classnames';

const TCell = ({className = '', onClick = () => {}, children, textRight, withIcon, header, filter, ...otherProps}) => {
  return header ? (
    <th
      onClick={onClick}
      className={classNames('table__cell table__cell--head', {
        [className]: className,
        'table__cell--text-right': textRight,
        'table__cell--filter': filter,
      })}
      {...otherProps}>
      {children}
    </th>
  ) : (
    <td
      onClick={onClick}
      className={classNames('table__cell', {
        [className]: className,
        'table__cell--text-right': textRight,
        'table__cell--with-icon': withIcon,
      })}
      {...otherProps}>
      {children}
    </td>
  );
};

export default TCell;
