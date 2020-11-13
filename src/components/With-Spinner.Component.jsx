import React from "react";

const withSpinner = (WrappedComponent) => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <div className="is-loading">Please wait while loading...</div>
  ) : (
    <WrappedComponent {...rest} />
  );
};
export default withSpinner;
