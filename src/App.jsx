import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Store from './components/store/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Store></Store>
    </div>
  )
}

export default App
