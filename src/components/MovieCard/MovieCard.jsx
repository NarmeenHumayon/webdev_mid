import "./MovieCard.css";
const MovieCard = ({ movie, ...props }) => {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path == null && movie.backdrop_path == null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s"
            : `https://image.tmdb.org/t/p/w500${
                movie.poster_path || movie.backdrop_path
              }`
        }
        alt={movie.original_title}
        className="backdrop"
      />
      <div
        className="flex-hor"
        style={{
          margin: "5px",
          marginTop: "0",
          marginBottom: "10px",
        }}
      >
        <div className="title">{movie.original_title}</div>
        <div className="rating">
          {movie.vote_average}/10{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>
      </div>
      <p className="desc truncate-overflow">{movie.overview}</p>
    </div>
  );
};
export default MovieCard;
