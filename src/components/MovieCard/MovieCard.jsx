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
        <div className="rating">{movie.vote_average}/10</div>
      </div>
      <p className="desc truncate-overflow">{movie.overview}</p>
    </div>
  );
};
export default MovieCard;
