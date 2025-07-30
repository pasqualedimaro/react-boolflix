  import { useGlobalContext } from "../contexts/GlobalContext";
  import Flag from "react-world-flags"
  import FlagForLanguage from "./FlagForLanguage"
  import VoteInStars from "./VoteInStars"

  export default function ListOfResults(){
    
  const {movies} = useGlobalContext()

  return (
    <>
      <div className='container'>
        <h2>Risultati Ricerca</h2>
        {movies.length > 0 ? (
          movies.filter(movie => movie.media_type !== "person").map((movie) => (
            <div className = "col" key={movie.id}>
              <ul>
                <div>
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
                  <li className='border border-danger'>
                    <p className='m-2'>{movie.title || movie.name}</p>
                    <p className='m-2'>{movie.original_title || movie.original_name}</p>
                    <Flag 
                        code={FlagForLanguage(movie.original_language)}
                        className="flag"
                        />
                    <VoteInStars movieId={movie.id} />
                  </li>
                </div>
              </ul>
            </div>
          ))
        ) : (
          <p>Nessun Risultato</p>
        )}
      </div>
    </>
  )
}