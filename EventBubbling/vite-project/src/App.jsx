import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import ItemList from './mapsAndKeys'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemList/>
    </>
  )
}

export default App
