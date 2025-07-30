import SearchBar from './SearchBar'

export default function AppHeader(){
    return(
        <>
        <header className='d-flex justify-content-between align-items-center p-3 bg-dark'>
            <div>
                <img src="https://fontmeme.com/permalink/250730/eda5a62b538a1ddeb558eaef22509eeb.png" id='logo' alt="" />
            </div>
            <SearchBar />
        </header>
        </>
    )
}