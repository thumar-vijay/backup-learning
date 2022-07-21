import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AV6TqymW-EJQmO2HHXk2FeKCNLWSLkvMTSdoHl5jvQX2n3qqntrgP8i33uy1Dcc0V997Dvt9xFK8pkeR",
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PayPalScriptProvider options={initialOptions}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PayPalScriptProvider>
);
reportWebVitals();
