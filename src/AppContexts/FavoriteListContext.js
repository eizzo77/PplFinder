import { useState, createContext } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (user) => {
    if (!favorites.includes(user)) {
      favorites.push(user);
      setFavorites((favorites) => [...favorites]);
    } else {
      let index = favorites.indexOf(user);
      favorites.splice(index, 1);
      setFavorites((favorites) => [...favorites]);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, addToFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
