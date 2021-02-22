import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";

import store from "./redux/store";
import theme from "./theme/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
