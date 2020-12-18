import React from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export const Store = createStore(rootReducer, applyMiddleware(thunk, logger));
