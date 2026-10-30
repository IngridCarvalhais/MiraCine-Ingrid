
import { NavLink } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext.jsx";

function NavBar() {
  // Obtenemos los favoritos del contexto global
  const { favorites } = useMovieContext();

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">

        {/* Logotipo de Mira */}
        <NavLink
          to="/"
          className="logo"
          aria-label="Mira - Ir al inicio"
        >
          <span className="logo-icon" aria-hidden="true">
            🎬
          </span>

          <span className="logo-text">
            Mira<span className="logo-dot">.</span>
          </span>
        </NavLink>

        {/* Enlaces de navegación */}
        <div className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span aria-hidden="true">♡</span>
            <span>Favoritos</span>

            <span
              className="favorite-count"
              aria-label={`${favorites.length} películas favoritas`}
            >
              {favorites.length}
            </span>
          </NavLink>

        </div>
      </nav>
    </header>
  );
}

export default NavBar;
