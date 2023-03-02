import './App.css'
import NonMemoized from './Components/NonMemoized'
import Memoized from './Components/Memoized'

function App() {
  return (
    <div className="App">
      <NonMemoized />
      <Memoized />
    </div>
  )
}

export default App
