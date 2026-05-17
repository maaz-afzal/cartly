import { Heart, Moon, Search, ShoppingBag, Sun } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const itemCount = getTotalItems();
  const favoriteCount = favorites.length;
  return (
    <header className="w-full bg-white sticky top-0 z-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center py-5 w-full">
          <div>
            <span className="text-2xl font-bold font-serif tracking-widest">
              CARTLY
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative w-90">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-[#F0803C] focus:ring-2 focus:ring-[#F0803C]/30 placeholder:text-gray-400"
              />
            </div>

            <div className="relative p-2 hover:bg-[#EEE5E9] rounded-full cursor-pointer transition duration-250">
              <Heart
                size={20}
                className={`cursor-pointer transition ${favoriteCount > 0 ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                onClick={() => navigate("/favorites")}
              />

              {favoriteCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1.5 text-[10px] leading-none min-w-4 h-4 flex items-center justify-center">
                  {favoriteCount > 99 ? "99+" : favoriteCount}
                </span>
              )}
            </div>
            <div className="relative p-2 hover:bg-[#EEE5E9] rounded-full cursor-pointer transition duration-200">
              <ShoppingBag
                size={20}
                className="cursor-pointer"
                onClick={() => navigate("/cart")}
              />

              {itemCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full px-1.5 text-[10px] leading-none min-w-4 h-4 flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </div>
            <div
              className="p-2 hover:bg-[#EEE5E9] rounded-full cursor-pointer transition duration-250"
              onClick={() => toggleTheme()}
            >
              {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            <button className="bg-[#256EFF] text-white px-6 py-2 rounded-full font-semibold active:scale-96 transition duration-300 cursor-pointer hover:opacity-90">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
