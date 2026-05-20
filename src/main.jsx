import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <FavoritesProvider>
        <CartProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CartProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
