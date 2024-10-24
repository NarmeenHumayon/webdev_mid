import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_TMDBKEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovies(res?.data?.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
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
