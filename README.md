# MiraCine — Aplicación de películas con React

## Descripción

MiraCine es una aplicación web desarrollada con React y Vite que permite explorar películas, consultar información cinematográfica, realizar búsquedas y gestionar una lista personal de favoritos.

El proyecto utiliza la API de The Movie Database (TMDB) para obtener información actualizada sobre películas.

## Tecnologías utilizadas

- React 19
- JavaScript (JSX)
- Vite
- HTML5 y CSS3
- React Router DOM
- Context API y React Hooks
- TMDB API
- LocalStorage

## Funcionalidades principales

- Visualización de películas populares.
- Búsqueda de películas por título.
- Presentación de películas mediante tarjetas con póster e información.
- Incorporación y eliminación de películas favoritas.
- Persistencia de favoritos mediante LocalStorage.
- Navegación entre la página principal y favoritos.
- Gestión de estados durante las peticiones a la API.

## Estructura del proyecto

```text
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── context/
│   └── MovieContext.jsx
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── services/
│   └── tmdb.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Instalación y ejecución

**1. Clonar el repositorio**

```bash
git clone URL_DEL_REPOSITORIO
cd MiraCine-Ingrid
```

**2. Instalar las dependencias**

```bash
npm install
```

**3. Configurar la API**

Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_TMDB_API_KEY=clave_de_themoviedb
```

Para obtener una clave es necesario registrarse en [The Movie Database](https://www.themoviedb.org/).

**4. Ejecutar la aplicación**

```bash
npm run dev
```

Abrir en el navegador la dirección local que indique Vite.

## Organización del código

La aplicación utiliza componentes reutilizables para representar las películas y la navegación.

React Router DOM permite navegar entre las diferentes páginas sin recargar la aplicación.

Context API centraliza la gestión de favoritos y LocalStorage permite conservarlos entre sesiones del navegador.

Las consultas a TMDB están organizadas en el módulo `services/tmdb.js`.

## Información

Proyecto desarrollado por Ingrid Carvalhais Silva.

Práctica académica de desarrollo Front-end con React.

Los datos e imágenes de películas proceden de The Movie Database (TMDB). Este proyecto utiliza la API de TMDB, pero no está respaldado ni certificado por TMDB.