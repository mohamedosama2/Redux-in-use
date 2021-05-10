import { reducer } from "./Cake/cakeReducer";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
