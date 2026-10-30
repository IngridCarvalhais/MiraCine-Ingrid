
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Función común para realizar consultas a TMDB
async function fetchMovies(endpoint, params = {}) {

  if (!API_KEY) {
    throw new Error(
      "No se ha configurado la API Key de TMDB."
    );
  }

  const url = new URL(`${BASE_URL}${endpoint}`);

  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "es-ES");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Error al consultar TMDB: ${response.status}`
    );
  }

  const data = await response.json();

  return data.results ?? [];
}

// Obtener películas populares
export async function getPopularMovies() {
  return fetchMovies("/movie/popular", {
    page: 1
  });
}

// Buscar películas por título
export async function searchMovies(query) {
  return fetchMovies("/search/movie", {
    query: query.trim(),
    page: 1,
    include_adult: false
  });
}

// Obtener la URL del póster
export function getPosterUrl(posterPath) {

  if (!posterPath) {
    return null;
  }

  return `${IMAGE_BASE_URL}${posterPath}`;
}
