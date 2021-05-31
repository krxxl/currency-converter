import React from 'react';
import './index.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Spinner = ({button, center, tRow}) => {
  return center ? (
    <div className='spinner-wrapper'>
      <div className={classnames('spinner-border', {'spinner-border--button': button})} role='status' />
    </div>
  ) : tRow ? (
    <tr className={classnames('spinner-border', {'spinner-border--button': button})} role='status' />
  ) : (
    <div className={classnames('spinner-border', {'spinner-border--button': button})} role='status' />
  );
};

Spinner.propTypes = {
  center: PropTypes.bool,
  button: PropTypes.string,
};

export default Spinner;
