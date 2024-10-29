import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './state'
import Counter from './counter'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/s' element={<State/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/n' element={<Name/>}/>
      </Routes>
    </>
  )
}

export default App
