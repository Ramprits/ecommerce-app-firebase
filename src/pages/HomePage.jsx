import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../components/Card.Component";

const HomeComponent = () => {
  const { directories } = useSelector((state) => state.directoryList);
  return (
    <div className="container mt-5">
      <div className="columns is-multiline">
        {directories.map(({ id, size, ...directory }) => (
          <div className={`column is-${size}`} key={id}>
            <CardComponent {...directory} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
