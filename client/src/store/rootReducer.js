import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productList from "./reducers/product";
import directoryList from "./reducers/directory";
import user from "./reducers/user";
import carts from "./reducers/cart";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts"],
};

const rootReducer = combineReducers({
  productList,
  user,
  directoryList,
  carts,
});
export default persistReducer(persistConfig, rootReducer);
