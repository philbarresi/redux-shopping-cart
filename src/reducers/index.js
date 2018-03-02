import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";

const shoppingCartApp = combineReducers({
  products,
  cart
});

export default shoppingCartApp;
