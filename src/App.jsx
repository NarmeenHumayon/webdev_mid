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
  const [favourite, setFavourites] = useState(false);
  useEffect(() => {
    setLoading(true);
    const API_KEY = import.meta.env.VITE_TMDBKEY;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
    if (query) {
      url = ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
    }
    if (favourite) {
      const existingIds = JSON.parse(localStorage.getItem("ids")) || [];
      setMovies([]);
      existingIds.map((id) => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
          .then((res) => {
            setMovies((prevMovies) => [...prevMovies, res.data]);
          })
          .catch((e) => {
            setError(e);
          });
      });
      setLoading(false);
      return;
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
  }, [query, favourite]);
  return (
    <>
      <queryContext.Provider
        value={{ query, setQuery, favourite, setFavourites }}
      >
        <Navbar />
        <div className="movies">
          {loading ? (
            <WifiLoader />
          ) : (
            movies.map((movie) => (
              <a
                key={movie.id}
                className="resetAnchor"
                href={`/movies/${movie.id}`}
              >
                <MovieCard movie={movie} />
              </a>
            ))
          )}
        </div>
      </queryContext.Provider>
    </>
  );
}

export default App;
