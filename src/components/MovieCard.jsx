
import { getPosterUrl } from "../services/tmdb.js";
import { useMovieContext } from "../context/MovieContext.jsx";

function MovieCard({ movie }) {
  // Accedemos al sistema de favoritos
  const { isFavorite, toggleFavorite } = useMovieContext();

  // Comprobamos si la película está guardada
  const favorite = isFavorite(movie.id);

  // Obtenemos el póster
  const poster = getPosterUrl(movie.poster_path);

  // Obtenemos el año de estreno
  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Sin fecha";

  // Obtenemos la valoración
  const rating =
    typeof movie.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "N/D";

  return (
    <article className="movie-card">

      {/* Póster de la película */}
      <div className="poster-container">

        {poster ? (
          <img
            src={poster}
            alt={`Póster de ${movie.title}`}
            loading="lazy"
          />
        ) : (
          <div className="no-poster">
            <span aria-hidden="true">🎬</span>
            <p>Sin póster disponible</p>
          </div>
        )}

        {/* Botón de favoritos sobre el póster */}
        <div className="movie-overlay">
          <button
            type="button"
            className={`favorite-button ${
              favorite ? "is-favorite" : ""
            }`}
            onClick={() => toggleFavorite(movie)}
            aria-label={
              favorite
                ? `Quitar ${movie.title} de favoritos`
                : `Añadir ${movie.title} a favoritos`
            }
            aria-pressed={favorite}
            title={
              favorite
                ? "Quitar de favoritos"
                : "Añadir a favoritos"
            }
          >
            <span aria-hidden="true">
              {favorite ? "♥" : "♡"}
            </span>
          </button>
        </div>

      </div>

      {/* Información de la película */}
      <div className="movie-info">

        <h3 title={movie.title}>
          {movie.title}
        </h3>

        <div className="movie-details">
          <span>{year}</span>

          <span className="movie-rating">
            <span aria-hidden="true">⭐</span>
            {rating}
          </span>
        </div>

      </div>

    </article>
  );
}

export default MovieCard;
