
import './Scss/Index.scss'
import Background from './Components/Background'
import Footer from './Sections/Footer'
import Navbar from './Sections/Navbar'
import Wrapper from './Sections/Wrapper'

function App() {

  return (
    <div className="main">
      <Background/>
      <div className="App">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  )
}

export default App
