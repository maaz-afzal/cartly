import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </BrowserRouter>,
);
