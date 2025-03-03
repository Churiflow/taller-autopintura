import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "virtual:windi.css"; // Asegúrate de importar los estilos de WindiCSS
import 'windi.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
