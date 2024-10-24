import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_TMDBKEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data?.results);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
