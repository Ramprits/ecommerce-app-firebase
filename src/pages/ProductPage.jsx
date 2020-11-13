import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { UPDATE_PRODUCTS } from "store/reducers/product";
import { collectionSnapShotToMap, firestore } from "firebase/firebase.utils";

import CollectionItem from "components/CollectionItem.Component";
import ProductOverViewComponent from "components/ProductOverView.Component";
import withSpinner from "components/With-Spinner.Component";

const CollectionItemWithSpinner = withSpinner(CollectionItem);
const ProductOverViewWithSpinner = withSpinner(ProductOverViewComponent);

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
        render={(props) => (
          <CollectionItemWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <ProductOverViewWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ProductPage;
