import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import productsReducer from "./reducers/productsReducer/productsReducer";
import { thunk } from "redux-thunk";
import productCardReducer from "./reducers/productCardReducer/productCardReducer";

let reducers = combineReducers({
    productsPage: productsReducer,
    productCardPage: productCardReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store

export default store