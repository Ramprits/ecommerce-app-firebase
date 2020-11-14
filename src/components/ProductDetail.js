import React from "react";
import { Link, useHistory } from "react-router-dom";
import CardComponent from "./Card";

const ProductDetail = ({ title, items, routeName, match }) => {
  const params = useHistory();
  return (
    <>
      <div className="title">
        <Link
          style={{ display: "flex", justifyContent: "center" }}
          to={`${params.location.pathname}/${routeName}`}
        >
          {title}
        </Link>
      </div>
      <div className="columns is-multiline">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <div className="column is-3" key={item.id}>
              <CardComponent {...item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductDetail;
