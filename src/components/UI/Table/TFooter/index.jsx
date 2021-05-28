import React from 'react';
import './index.scss';
import classNames from 'classnames';

const TFooter = ({className = '', children, ...otherProps}) => {
  return (
    <tfoot
      className={classNames('table__header', {
        [className]: className,
      })}
      {...otherProps}>
      {children}
    </tfoot>
  );
};

export default TFooter;
