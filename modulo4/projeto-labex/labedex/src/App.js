import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '..src/Home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index elemente={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
