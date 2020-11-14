import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { UPDATE_PRODUCTS } from "store/reducers/product";
import { collectionSnapShotToMap, firestore } from "firebase/firebase.utils";

import CollectionItem from "components/CollectionItem";
import ProductOverViewComponent from "components/ProductOverView";

const ProductPage = ({ match }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const productRef = firestore.collection("products");
    const UnSubscribeCollectionMap = productRef.onSnapshot(async (snapShot) => {
      const collectionMap = collectionSnapShotToMap(snapShot);
      dispatch({ type: UPDATE_PRODUCTS, payload: collectionMap });
    });
    setLoading(false);
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
