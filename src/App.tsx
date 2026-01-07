import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeComponent from './components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
