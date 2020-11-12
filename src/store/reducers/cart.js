import { addItemToCart, removeItemFromCart } from "src/utils/cart.utils";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";
const initialState = {
  cartItems: [],
  loading: false,
  errorMessage: "",
};

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};
