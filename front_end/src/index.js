import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,BrowserRouter } from "react-router-dom";
import App from "./App";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri="https://kartavya-academy-777bf.web.app/admin"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
  ,  rootElement
);
