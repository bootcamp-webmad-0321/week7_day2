import './App.css'

import BasicList from './BasicList'
import DynamicMovies from './DynamicMoviesList'
import StaticMovies from './StaticMovies'

const App = () => {
  return (

    <main>

      <DynamicMovies />


      <hr />


      <StaticMovies />


      <hr />


      <BasicList />

    </main>
  )
}

export default App