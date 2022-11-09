import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import CartReducer from "./cartReducer";

const store = createStore(CartReducer, composeWithDevTools());

export default  store;

