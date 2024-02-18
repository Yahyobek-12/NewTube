import Video from '../components/Video'
import { Routes, Route } from 'react-router-dom' 
import { Home, Nav, Navbar, Shorts, History } from '../constants/constans'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/video/:videoId' element={<Video />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Nav />
    </div>
  )
}

export default App
