import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import FavoriteProvider from "./context/FavoriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoriteProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoriteProvider>
  </BrowserRouter>,
);
