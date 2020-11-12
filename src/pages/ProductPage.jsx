import React from "react";
import { Route } from "react-router-dom";
import CollectionItem from "src/components/CollectionItem.Component";
import ProductOverViewComponent from "src/components/ProductOverView.Component";

const ProductPage = ({ match }) => {
  return (
    <div className="container mt-5">
      <Route
        exact
        path={`${match.path}`}
        component={ProductOverViewComponent}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionItem}
      />
    </div>
  );
};

export default ProductPage;
