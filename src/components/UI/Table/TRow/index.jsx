import React from 'react';
import './index.scss';
import classNames from 'classnames';

const TRow = ({className = '', withSubTable, footer, children, withLink, ...otherProps}) => {
  return (
    <tr
      className={classNames('table__row', {
        [className]: className,
        'table__row--subTable': withSubTable,
        'table__row--footer': footer,
        'table__row--with-link': withLink,
      })}
      {...otherProps}>
      {children}
    </tr>
  );
};

export default TRow;
