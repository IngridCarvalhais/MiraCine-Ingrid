
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          Mira © 2026 | Cada película, una nueva historia.
        </p>
        <p>
          Desarrollado con React y TMDB
        </p>
      </footer>
    </div>
  );
}

export default App;
