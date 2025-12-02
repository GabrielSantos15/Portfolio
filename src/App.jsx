import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main>
      <Home></Home>
      <About></About>
    </main>
  )
}

export default App
