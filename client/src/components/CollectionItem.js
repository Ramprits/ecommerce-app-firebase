import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CardComponent from "./Card";
import { productByName } from "store/selectors/productSelector";

const CollectionItem = ({ match }) => {
  const { title, items } = useSelector(
    productByName(match.params.collectionId)
  );
  return (
    <Fragment>
      <div
        className="title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {title && title}
      </div>
      <div className="columns is-multiline">
        {items &&
          items.map((item) => (
            <div className="column is-3" key={item.id}>
              <CardComponent {...item} />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default CollectionItem;
