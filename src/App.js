import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/style/App.css";

import ScrollToTop from "./app/ScrollToTop";
import Routes from "./app/Routes";

// MAIN FUNCTION: APP
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
