import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// styles
import "./styles/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);