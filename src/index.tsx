import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { IndexView } from "./views";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <IndexView />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
