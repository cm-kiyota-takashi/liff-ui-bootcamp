import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//
import IndexPage from "./pages/IndexPage";
import FavoritePage from "./pages/FavoritePage";
import AboutPage from "./pages/AboutPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={["/", "/home"]}>
          <IndexPage />
        </Route>
        <Route exact path="/favorite">
          <FavoritePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
