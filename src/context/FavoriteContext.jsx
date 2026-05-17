import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
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

    let newFavorite;

    if (existingFavorite) {
      newFavorite = favorites.filter((item) => item.id !== product.id);
    } else {
      newFavorite = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      };
      newFavorite = [...favorites, newFavorite];
    }

    setFavorites(newFavorite);
  };

  const removeFromFavorite = (id) => {
    const newFavorite = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorite);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite, clearFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
