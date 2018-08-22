/**
 * Created by alvinoktavianus (https://id.linkedin.com/in/alvinoktavianus)
 * on 22/08/18
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "./reducer";

const middlewares = [];

// Add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// Add redux-logger in development
if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middlewares.push(logger);
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
middlewares.push(routeMiddleware);

const store = createStore(
  connectRouter(history)(combineReducers({ ...rootReducer })),
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Run saga middleware

export default store;

export { history };
