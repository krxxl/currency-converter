import React from 'react';
import './index.scss';
import Spinner from 'components/UI/Loader/Spinner';
import PropTypes from 'prop-types';

const Loader = ({isLoading, children, fullscreen = false, forTable, center = true, popup}) => {
  return isLoading ? (
    fullscreen ? (
      <div className='fullscreen'>
        <Spinner center={center} />
      </div>
    ) : popup ? (
      <>
        <div className='inside-block'>
          <Spinner center={center} />
        </div>
        {children}
      </>
    ) : forTable ? (
      <tbody className='inside-block'>
        <Spinner tRow/>
      </tbody>
    ) : (
      <div className='inside-block'>
        <Spinner center={center} />
      </div>
    )
  ) : (
     children
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool,
  canter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Loader;
