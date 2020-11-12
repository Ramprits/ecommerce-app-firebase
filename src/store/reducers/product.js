import SHOP_DATA from "../../assets/shop.data";

export const INITIAL_PRODUCT_LOAD = "INITIAL_PRODUCT_LOAD";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
const initialState = {
  products: SHOP_DATA,
  loading: false,
  errorMessage: "",
};

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
    case PRODUCT_LOADED:
      return { ...state, loading: false, error: "" };
    default:
      return state;
  }
};
