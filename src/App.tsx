
import './Scss/Index.scss'
import Background from './Components/Background'
import Footer from './Sections/Footer'
import Navbar from './Sections/Navbar'
import Wrapper from './Sections/Wrapper'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import MyList from './Pages/MyList'
import Pokemon from './Pages/Pokemon'
import Compare from './Pages/Compare'
import Search from './Pages/Search'

function App() {

  return (
    <div className="main">
      <Background />
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<Navigate to="pokemon/1" />} />
          </Routes>
          <Wrapper />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
