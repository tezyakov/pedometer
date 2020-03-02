import { createStore, applyMiddleware } from "redux";
import rowReducer from "./reducer";
import thunk from 'redux-thunk';

export default createStore(rowReducer, applyMiddleware(thunk));