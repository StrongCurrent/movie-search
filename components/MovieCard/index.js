import Image from "next/image";

export default function MovieCard({ movieData, imageData }) {
  return (
    <>
      {movieData.results.map((movie) => {
        return (
          <article key={movie.id} className="movie-card">
            <div className="movie-img">
              <Image
                src={imageData.images.base_url + "w185" + movie.poster_path}
                width={200}
                height={300}
                alt=""
              />
            </div>
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <ul className="movie-detail__list">
                <li>{movie.release_date}</li>
                <li>{movie.vote_average}</li>
              </ul>
              <p className="movie-description">{movie.overview}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
