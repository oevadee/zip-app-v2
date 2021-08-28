import React from "react";
import ReactDOM from "react-dom";
import { ReactLocation } from "react-location";
import { AppRoutes } from "src/routes";
import { Layout } from "./layout";
import { GlobalStyle } from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ReactLocation>
      <GlobalStyle />
      <Layout>
        <AppRoutes />
      </Layout>
    </ReactLocation>
  </React.StrictMode>,
  document.getElementById("root")
);
