import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./multiReducer";



export const ReduxStore= legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))