import { createStore } from "redux";
import  rootReducer  from "../reducers/shoppingCart";

const store = createStore(rootReducer);

export default store
