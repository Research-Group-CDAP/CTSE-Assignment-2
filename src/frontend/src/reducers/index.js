import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { itemReducer } from "./itemReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
  authReducer,
  itemReducer,
  cartReducer,
});
