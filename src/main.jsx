import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import { redirect } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-uegqsuc3j3u7b1ts.us.auth0.com"
      clientId="r6rKGyOgxPnYfRk9xAnlSFJeVcXOvmra"
      authorizationParams={
        {
          redirect_uri:"http://localhost:5173"
        }
      }
      audience="http://localhost:8000"
      scope="openid profile email"
      useRefreshTokens={true}
      cacheLocation="localstorage">
        < MantineProvider>
    <App />
    </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
