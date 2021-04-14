import React from 'react';
import PropTypes from 'prop-types';

export const LoadingComponent = ({ component }) => {
  return (
    <div id="LoadingMessage">
      <h1>{`Loading ${component}...`}</h1>
    </div>
  );
};

export const ErrorComponent = ({ errorMessage }) => {
  return (
    <div id="ErrorMessage">
      <h1>{errorMessage}</h1>
    </div>
  );
};

LoadingComponent.propTypes = {
  component: PropTypes.string,
};

LoadingComponent.defaultProps = {
  component: 'data',
};
ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorComponent.defaultProps = {
  errorMessage: 'Something went wrong ',
};
