import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { collectionSnapShotToMap, firestore } from "firebase/firebase.utils";

import CollectionItem from "components/CollectionItem";
import ProductOverViewComponent from "components/ProductOverView";
import { FETCH_PRODUCTS_SUCCESS } from "store/reducers/product";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const productRef = firestore.collection("products");
    const UnSubscribeCollectionMap = productRef.onSnapshot(async (snapShot) => {
      const collectionMap = collectionSnapShotToMap(snapShot);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: collectionMap });
    });
    return () => {
      UnSubscribeCollectionMap();
    };
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
