import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import axios from "axios";
import Navbar from "./components/NavBar/NavBar";
import { queryContext } from "./Context/Context";
import WifiLoader from "./components/Loaders/WifiLoader";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_TMDBKEY;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
    if (query) {
      url = ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
    }
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
  }, [query]);
  return (
    <>
      <queryContext.Provider value={{ query, setQuery }}>
        <Navbar />
        <div className="movies">
          {loading ? (
            <WifiLoader />
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          )}
        </div>
      </queryContext.Provider>
    </>
  );
}

export default App;
