import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <h1 className="text-2xl text-blue-600">Microfrontend Container</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
