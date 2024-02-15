import { Routes, Route } from 'react-router-dom' 
import { Home, Nav, Navbar, Shorts } from '../constants/constans'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shorts' element={<Shorts />} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App
