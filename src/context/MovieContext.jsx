
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const MovieContext = createContext(null);

export function MovieProvider({ children }) {

  // Recuperar favoritos del navegador
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("mira-favorites");
      const parsed = saved ? JSON.parse(saved) : [];

      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Guardar favoritos cuando cambian
  useEffect(() => {
    localStorage.setItem(
      "mira-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Comprobar si una película es favorita
  function isFavorite(movieId) {
    return favorites.some(
      (movie) => movie.id === movieId
    );
  }

  // Añadir o eliminar una película
  function toggleFavorite(movie) {
    setFavorites((previous) => {
      const exists = previous.some(
        (item) => item.id === movie.id
      );

      if (exists) {
        return previous.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...previous, movie];
    });
  }

  return (
    <MovieContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  const context = useContext(MovieContext);

  if (context === null) {
    throw new Error(
      "useMovieContext debe usarse dentro de MovieProvider"
    );
  }

  return context;
}
