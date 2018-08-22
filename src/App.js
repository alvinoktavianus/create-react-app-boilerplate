import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <h1>Hello world!</h1>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
