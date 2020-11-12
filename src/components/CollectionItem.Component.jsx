import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getProductByCategoryName } from "src/store/selectors/productSelector";
import CardComponent from "./Card.Component";

const CollectionItem = ({ match }) => {
  const { title, items } = useSelector(
    getProductByCategoryName(match.params.collectionId)
  );
  return (
    <Fragment>
      <div
        className="title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {title}
      </div>
      <div className="columns is-multiline">
        {items.map((item) => (
          <div className="column is-3" key={item.id}>
            <CardComponent {...item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CollectionItem;
