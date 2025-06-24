import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./ScrollToTop";
import Routes from "./app/Routes";

// MAIN FUNCTION: APP
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes />
        <ScrollToTop />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
