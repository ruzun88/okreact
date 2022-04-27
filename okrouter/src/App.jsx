import Comp from './components/Comp'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const list = ['bye 1', 'bye 2', 'bye 3']

  return (
    <div className="App">
      <h1>Main</h1>
      {
        list.map(item => (
          <Comp value={item} />
        ))
      }
      <Comp value="hello 1" />
      <Comp value="hello 2" />
      <Comp value="hello 3" />
    </div>
  )
}

export default App
