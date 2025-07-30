import { useGlobalContext } from "../contexts/GlobalContext";
import Flag from "react-world-flags";
import FlagForLanguage from "./FlagForLanguage";
import VoteInStars from "./VoteInStars";

export default function ListOfResults() {
  const { movies } = useGlobalContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mb-4">Risultati Ricerca</h2>
          {movies.length > 0 ? (
            movies
              .filter((movie) => movie.media_type !== "person")
              .map((movie) => (
                <div className="col-3 mb-4" key={movie.id}>
                  <div
                    className="card p-3 movie-card"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`,
                    }}
                  >
                    <div className="details">
                      <p className="m-2 fs-5 fw-bold">
                        {movie.title || movie.name}
                      </p>
                      <p className="m-2 fs-5 fw-bold">
                        {movie.original_title || movie.original_name}
                      </p>
                      <Flag
                        code={FlagForLanguage(movie.original_language)}
                        className="flag"
                      />
                      <VoteInStars movieId={movie.id} />
                      <p className="m-2">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p>Nessun Risultato</p>
          )}
        </div>
      </div>
    </>
  );
}
