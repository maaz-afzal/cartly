import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorite = (product) => {
    const existingFavorite = favorites.find((item) => item.id === product.id);

    let newFavorites;

    if (existingFavorite) {
      newFavorites = favorites.filter((item) => item.id !== product.id);
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      };
      newFavorites = [...favorites, newItem];
    }

    setFavorites(newFavorites);
  };

  const removeFromFavorite = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
