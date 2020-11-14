import { addItemToCart, removeItemFromCart } from "utils/cart.utils";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";

const initialState = {
  cartItems: [],
  loading: false,
  errorMessage: "",
};

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload
        ),
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
