export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CURRENT_USER_LOADED = "CURRENT_USER_LOADED";
export const CURRENT_USER_ERROR = "CURRENT_USER_ERROR";

const initialState = {
  currentUser: null,
  loading: false,
  errorMessage: "",
};

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    case CURRENT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
