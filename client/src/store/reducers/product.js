import { firestore } from "firebase/firebase.utils";
import { collectionSnapShotToMap } from "firebase/firebase.utils";

export const INITIAL_PRODUCT_LOAD = "INITIAL_PRODUCT_LOAD";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const initialState = {
  products: null,
  isFetching: false,
  error: undefined,
};

export const fetchProductFailure = (payload) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload,
});

export const fetchProductStart = () => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductAsync = () => (dispatch) => {
  const productRef = firestore.collection("products");
  dispatch(fetchProductStart());
  productRef
    .get()
    .then((snapShot) => {
      const collectionMap = collectionSnapShotToMap(snapShot);
      dispatch(fetchProductSuccess(collectionMap));
    })
    .catch((error) => {
      dispatch(fetchProductFailure(error.message));
    });
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_START:
      return { ...state, isFetching: true, error: "", products: [] };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isFetching: false, error: "", products: payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
