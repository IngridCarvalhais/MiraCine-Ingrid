
import { useEffect, useState } from "react";

import {
  getPopularMovies,
  searchMovies
} from "../services/tmdb.js";

import MovieCard from "../components/MovieCard.jsx";

function Home() {
  // Películas obtenidas de TMDB
  const [movies, setMovies] = useState([]);

  // Texto que escribe el usuario
  const [searchQuery, setSearchQuery] = useState("");

  // Búsqueda que se enviará a TMDB
  const [submittedQuery, setSubmittedQuery] = useState("");

  // Estados de carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Consultar películas cuando cambia la búsqueda
  useEffect(() => {
    let cancelled = false;

    async function loadMovies() {
      setLoading(true);
      setError("");

      try {
        const results = submittedQuery
          ? await searchMovies(submittedQuery)
          : await getPopularMovies();

        if (!cancelled) {
          setMovies(results);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Ha ocurrido un error inesperado."
          );
          setMovies([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMovies();

    return () => {
      cancelled = true;
    };
  }, [submittedQuery]);

  // Ejecutar la búsqueda
  function handleSearch(event) {
    event.preventDefault();
    setSubmittedQuery(searchQuery.trim());
  }

  // Volver a las películas populares
  function clearSearch() {
    setSearchQuery("");
    setSubmittedQuery("");
  }

  return (
    <div className="home-page">

      {/* Portada de Mira */}
      <section className="hero">
        <div className="hero-content">

          <span className="eyebrow">
            TU UNIVERSO CINEMATOGRÁFICO
          </span>

          <h1>
            Descubre tu próxima
            <span> película favorita.</span>
          </h1>

          <p>
            Explora películas populares, encuentra
            nuevas historias y guarda tus favoritas
            en un solo lugar.
          </p>

          {/* Buscador compacto */}
          <form
            className="search-form"
            onSubmit={handleSearch}
            role="search"
          >
            <label
              htmlFor="movie-search"
              className="sr-only"
            >
              Buscar películas por título
            </label>

            <input
              id="movie-search"
              type="search"
              placeholder="Buscar películas..."
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
            />

            <button type="submit">
              Buscar
            </button>
          </form>

          {/* Limpiar búsqueda */}
          {submittedQuery && (
            <button
              type="button"
              className="clear-search"
              onClick={clearSearch}
            >
              ✕ Limpiar búsqueda
            </button>
          )}

        </div>
      </section>

      {/* Catálogo */}
      <section
        className="movies-section"
        aria-labelledby="movies-heading"
      >
        <div className="section-heading">

          <div>
            <span className="eyebrow">
              EXPLORA EL CATÁLOGO
            </span>

            <h2 id="movies-heading">
              {submittedQuery
                ? `Resultados para "${submittedQuery}"`
                : "Películas populares"}
            </h2>
          </div>

          {!loading && !error && (
            <span className="results-count">
              {movies.length} películas
            </span>
          )}

        </div>

        {/* Mensaje de carga */}
        {loading ? (
          <div
            className="status-message"
            role="status"
          >
            <div
              className="spinner"
              aria-hidden="true"
            ></div>

            <p>Cargando películas...</p>
          </div>

        ) : error ? (

          /* Mensaje de error */
          <div
            className="status-message error-message"
            role="alert"
          >
            <h3>
              No se pudieron cargar las películas
            </h3>

            <p>{error}</p>

            <p>
              Comprueba tu conexión a Internet
              y la configuración de TMDB.
            </p>
          </div>

        ) : movies.length === 0 ? (

          /* Sin resultados */
          <div className="status-message">
            <h3>No se encontraron películas</h3>

            <p>
              Prueba con otro título o limpia
              la búsqueda.
            </p>
          </div>

        ) : (

          /* Cuadrícula de películas */
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        )}

      </section>
    </div>
  );
}

export default Home;
