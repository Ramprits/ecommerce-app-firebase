import React from "react";
import "../styles/loading.style.css";

const LoadingComponent = ({ message }) => {
  return <div className="loading__container">{message}</div>;
};

export default React.memo(LoadingComponent);
