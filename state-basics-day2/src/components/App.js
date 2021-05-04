import './App.css'

import Button from './Button'
import Counter from './Counter'

const App = () => {
  return (
    <main>

      <h1>Esto es un botón con su propio estado:</h1>

      <Button />

      <hr />

      <h1>Esto es un contador con su propio estado:</h1>

      <Counter />

    </main>
  )
}

export default App;
