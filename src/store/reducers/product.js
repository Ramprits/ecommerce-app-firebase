import SHOP_DATA from "../../assets/shop.data";

export const INITIAL_PRODUCT_LOAD = "INITIAL_PRODUCT_LOAD";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
const initialState = {
  products: null,
  loading: false,
  errorMessage: "",
};

export const updateProduct = (payload) => ({
  type: UPDATE_PRODUCTS,
  payload,
});

export const initialProductLoad = () => ({
  type: INITIAL_PRODUCT_LOAD,
});

export const productLoaded = () => ({
  type: PRODUCT_LOADED,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INITIAL_PRODUCT_LOAD:
      return { ...state, loading: true, error: "", products: [] };
    case UPDATE_PRODUCTS:
      return { ...state, loading: false, error: "", products: payload };
    case PRODUCT_LOADED:
      return { ...state, loading: false, error: "" };
    default:
      return state;
  }
};
