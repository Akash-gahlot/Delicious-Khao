import { createStore } from "redux";


import rootReducer from "./redux/Reducers/main";

const Store = createStore(
    rootReducer

);
export default Store;