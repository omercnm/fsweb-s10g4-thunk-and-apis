import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { myReducer } from "./reducers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logger from "redux-logger";
const depo = createStore(myReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
