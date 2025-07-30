import {GlobalContextProvider, useGlobalContext } from './contexts/GlobalContext'
import ListOfResults from './components/ListOfResults'
import AppHeader from './components/AppHeader'

function App(){


return (
  <>
  <GlobalContextProvider>
    <AppHeader />
    <main>
      <ListOfResults />
    </main>
  </GlobalContextProvider>
 
  </>
)
}

export default App;