
import { Link } from "react-router-dom";

import { useMovieContext } from "../context/MovieContext.jsx";

import MovieCard from "../components/MovieCard.jsx";

function Favorites() {

  // Obtenemos las películas favoritas
  const { favorites } = useMovieContext();

  return (
    <section
      className="favorites-page"
      aria-labelledby="favorites-heading"
    >

      {/* Encabezado de favoritos */}
      <div className="favorites-header">

        <span className="eyebrow">
          TU COLECCIÓN PERSONAL
        </span>

        <h1 id="favorites-heading">
          Mis películas favoritas
          <span className="heading-heart" aria-hidden="true">
            {" "}♥
          </span>
        </h1>

        <p>
          Guarda las historias que más te gustan
          y vuelve a descubrirlas cuando quieras.
        </p>

      </div>

      {/* Si no hay favoritos */}
      {favorites.length === 0 ? (

        <div className="empty-favorites">

          <div
            className="empty-icon"
            aria-hidden="true"
          >
            ♡
          </div>

          <h2>
            Tu colección está esperando
          </h2>

          <p>
            Todavía no has guardado ninguna película.
            Explora nuestro catálogo y pulsa el corazón
            para añadir tus favoritas.
          </p>

          <Link
            to="/"
            className="primary-link"
          >
            Explorar películas
          </Link>

        </div>

      ) : (

        <>
          {/* Contador de películas guardadas */}
          <div className="favorites-toolbar">

            <p className="favorites-summary">
              {favorites.length === 1
                ? "Tienes 1 película favorita"
                : `Tienes ${favorites.length} películas favoritas`}
            </p>

            <Link
              to="/"
              className="explore-link"
            >
              + Descubrir más películas
            </Link>

          </div>

          {/* Tarjetas de películas favoritas */}
          <div className="movies-grid">

            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>
        </>

      )}

    </section>
  );
}

export default Favorites;
