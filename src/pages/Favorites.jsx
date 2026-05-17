import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import { FavoritesContext } from "../context/FavoritesContext";
import { CartContext } from "../context/CartContext";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, removeFromFavorite, clearFavorites } =
    useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  if (favorites.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Shopping</span>
        </button>

        <div className="text-center py-16">
          <Heart size={80} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            No favorites yet
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Start adding items you love to your favorites
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition"
          >
            Explore Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to Shopping</span>
      </button>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Favorites</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {favorites.length} items in your wishlist
          </p>
        </div>
        <button
          className="text-sm text-white hover:bg-red-600 dark:hover:bg-red-700 transition flex items-center gap-1 bg-gray-900 dark:bg-gray-700 px-5 py-2 rounded-xl cursor-pointer"
          onClick={() => clearFavorites()}
        >
          <Trash2 size={16} />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative bg-gray-50 dark:bg-gray-700 p-6 h-64 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full w-auto object-contain group-hover:scale-105 transition duration-300"
              />

              <button
                onClick={() => removeFromFavorite(item.id)}
                className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/30 transition"
              >
                <Heart size={18} className="fill-red-500 text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                {item.category}
              </p>
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm line-clamp-2 mb-2">
                {item.title}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
                <button
                  className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition hover:scale-105"
                  onClick={() => addToCart(item, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;