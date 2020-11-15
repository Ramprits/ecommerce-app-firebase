import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import CollectionItem from "components/CollectionItem";
import ProductOverViewComponent from "components/ProductOverView";
import { fetchProductAsync } from "store/reducers/product";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAsync());
  }, [dispatch]);

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
