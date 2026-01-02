import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<NavBar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
