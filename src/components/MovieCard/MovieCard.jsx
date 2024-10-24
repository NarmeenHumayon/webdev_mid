import "./MovieCard.css";
const MovieCard = ({ movie, ...props }) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.original_title}
        className="backdrop"
      />
      <div className="flex-hor">
        <div className="title">{movie.original_title}</div>
        <div className="rating">{movie.vote_average}/10</div>
      </div>
      <p className="desc truncate-overflow">{movie.overview}</p>
    </div>
  );
};
export default MovieCard;
