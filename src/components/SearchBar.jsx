import {useState} from 'react'

export default function SearchBar({movie, setMovie}){

    const[searchMovie, setSearchMovie] = useState('')
    const[foundMovie, setFoundMovie] = useState([])

    function handleSearch(e){
        e.preventDefault()

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5793350e75d5ca4e75bd4fb2759e1ee&query=${searchMovie}`)
        .then((res) => res.json())
        .then ((data) =>{
            console.log(data.results);
            setMovie(data.results)
        })
    }

    return (
        <>
        <form className='y-3' onSubmit={handleSearch}>
            <input type="search" 
            name='searchForm'
            id='searchForm'
            placeholder='Inserisci Film'
            value={searchMovie}
            onChange={e=> setSearchMovie(e.target.value)}/>
            <button type='submit'>Cerca</button>
        </form>
        </>
    )
}