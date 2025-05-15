import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.css";
import { store } from "./redux/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
