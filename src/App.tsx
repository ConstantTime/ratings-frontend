import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={`/product/:id`} component={Product} />
          <Route exact path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
