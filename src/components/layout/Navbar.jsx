import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setSearch } = useContext(SearchContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const itemCount = getTotalItems();
  const favoriteCount = favorites.length;

  const iconBtn =
    "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition";

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-800 dark:text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <span className="text-2xl font-bold tracking-widest font-serif">
            CARTLY
          </span>

          <div className="hidden md:block w-80 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-[#F0803C] dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              className={`${iconBtn} relative`}
              onClick={() => navigate("/favorites")}
            >
              <Heart
                size={20}
                className={
                  favoriteCount > 0
                    ? "fill-red-500 text-red-500"
                    : "text-gray-700 dark:text-gray-300"
                }
              />
              {favoriteCount > 0 && (
                <span className="badge">{favoriteCount}</span>
              )}
            </div>

            <div
              className={`${iconBtn} relative`}
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </div>

            <div className={iconBtn} onClick={toggleTheme}>
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            <button className="bg-[#256EFF] px-5 py-2 rounded-full text-white font-semibold hover:opacity-90">
              Login
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              className={iconBtn}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </button>

            <div
              className={`${iconBtn} relative`}
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </div>

            <button className={iconBtn} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="md:hidden pb-3">
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        )}

        {menuOpen && (
          <div className="md:hidden border-t py-4 space-y-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/favorites")}
                className="flex items-center gap-2"
              >
                <Heart size={20} />
                Favorites
              </button>

              {favoriteCount > 0 && (
                <span className="badge">{favoriteCount}</span>
              )}
            </div>

            <button onClick={toggleTheme} className="flex items-center gap-2">
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
              Theme
            </button>

            <button className="w-full bg-[#256EFF] text-white py-2 rounded-full">
              Login
            </button>
          </div>
        )}
      </div>

      <style>{`
        .badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: red;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 999px;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
