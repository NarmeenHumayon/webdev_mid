import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DescriptionPage.css";
const DescriptionPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const API_KEY = import.meta.env.VITE_TMDBKEY;
  function updateIdsInLocalStorage(newId) {
    const existingIds = JSON.parse(localStorage.getItem("ids")) || [];

    if (!existingIds.includes(newId)) {
      existingIds.push(newId);

      localStorage.setItem("ids", JSON.stringify(existingIds));
    }

    return existingIds;
  }

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res);
        setMovieDetail(res.data);
      });
  }, []);
  return (
    <div className="flex-hor">
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movieDetail.poster_path || movieDetail.backdrop_path
        }`}
        alt=""
        className="image"
      />
      <div className="flex-ver">
        <div className="dtitle">{movieDetail.original_title}</div>
        <div className="tagline">{movieDetail.tagline}</div>
        <div
          className="flex-hor"
          style={{ justifyContent: "left", gap: "50px", marginBottom: "20px" }}
        >
          <div className="country">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            {movieDetail?.origin_country?.map((s) => s)}
          </div>
          <div className="language">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-translate"
              viewBox="0 0 16 16"
            >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
            </svg>
            {movieDetail.original_language}
          </div>
        </div>
        <div className="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          {movieDetail.vote_average}/10 from {movieDetail.vote_count}
        </div>
        <p className="description">{movieDetail.overview}</p>
        <button
          class="button"
          onClick={() => {
            const updatedIds = updateIdsInLocalStorage(id);
            console.log(updatedIds);
          }}
        >
          Add to Favourites
          <span class="button-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
export default DescriptionPage;
