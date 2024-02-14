import Nav from '../components/Nav'
import Navbar from '../components/Navbar'
import { Routes, Route } from 'react-router-dom' 
import Shorts from '../components/Shorts'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/shorts' element={<Shorts />} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App
