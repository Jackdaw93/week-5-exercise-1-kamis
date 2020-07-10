import React from "react";
import { Logins, Profile } from "pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "redux/reducers";
import PrivateRoute from "helpers/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Logins />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
