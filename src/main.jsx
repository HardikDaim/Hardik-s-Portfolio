import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store';
import App from "./App.jsx";
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
