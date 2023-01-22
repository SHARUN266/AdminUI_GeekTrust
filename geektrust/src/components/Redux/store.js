import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as FetchUserReducer } from "./reducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({ FetchUserReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
