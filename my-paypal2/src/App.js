import logo from "./logo.svg";
import "./App.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "3.00",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </div>
  );
}

export default App;
