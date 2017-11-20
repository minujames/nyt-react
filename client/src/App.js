import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () =>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </div>
  </Router>;

export default App;
