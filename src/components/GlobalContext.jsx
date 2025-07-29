import { createContext, useState, /*useEffect*/} from 'react';

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    // const [movie, setMovie] = useState([]);

    const fetchData = (url = 'https://api.themoviedb.org/3/search/movie?api_key=d5793350e75d5ca4e75bd4fb2759e1ee&query=matrix+reloaded') => {
    fetch(url)
     .then((res) => res.json())
     .then((data) =>{
        setMovie(data.results)
    })
}

/*useEffect(() => {
    fetchData();
}, [])*/

return (
    <GlobalContext.Provider value={{/*movie,*/ fetchData}}>
        {children}
    </GlobalContext.Provider>
 )
}

export default GlobalContext;