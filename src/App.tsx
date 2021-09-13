import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Home/Products";
import Product from "./components/Product/Product";

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
