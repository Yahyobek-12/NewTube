import 'animate.css';
import '../styles/home.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../provider/provider'

const Home = () => {
  const { homeVideos, loading } = useContext(GlobalContext)

  return (
    <div className='home'>
        <h2 className='home-logo'>New Videos</h2>
        <div className="home-in">
            {loading ? (
              <div className='loading-home-card'>
                <div className='loading'></div>
              </div>
            ): (
              <>
                {homeVideos.map(item => (
                  <Link to='' className="home-card animate__animated animate__fadeIn" key={item.id}>
                    <img src={item.snippet.thumbnails.standard.url} alt='video' />
                    <div className="home-card-txt">
                      <h4>{item.snippet.title.slice(0, 80)}</h4>
                      <h5>{item.snippet.channelTitle}</h5>
                      <div>{item.snippet.channelTitle.slice(0, 1)}</div>
                    </div>
                  </Link>
                ))}
              </>
            )}
        </div>
    </div>
  )
}

export default Home