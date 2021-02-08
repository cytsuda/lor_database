import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import store from "./redux/store";
import theme from "./theme/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
