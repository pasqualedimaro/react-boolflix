  import { useGlobalContext } from "../contexts/GlobalContext";

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
                  <li className='border border-danger'>
                    <p className='m-2'>{movie.title || movie.name}</p>
                    <p className='m-2'>{movie.original_title || movie.original_name}</p>
                    {['it', 'es', 'fr', 'en'].includes(movie.original_language) ? (
                      <img src={`../flags/${movie.original_language}.jpg`} alt=''/>
                    ):(
                      <p className = 'm-2'>{movie.original_language}</p>
                    )}
                    <p className='m-2'>{movie.vote_average}</p>
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