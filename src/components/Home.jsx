import 'animate.css';
import '../styles/home.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../provider/provider'

const Home = () => {
  const { homeVideos, loading, saveToHistory  } = useContext(GlobalContext);
  const saveVideo = (videoData) => {
    saveToHistory(videoData)
  }

  return (
    <div className='home'>
      <h2 className='home-logo'>New Videos</h2>
      <div className="home-in">
        {loading ? (
          <div className='loading-home-card'>
            <div className='loading'></div>
          </div>
        ) : (
          <>
            {homeVideos.map(item => (
              <Link to={`/video/${item.id}`} className="home-card animate__animated animate__fadeIn" key={item.id}
              onClick={() => saveVideo(item)}>
                {item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.standard && (
                  <img src={item.snippet.thumbnails.standard.url} alt={item.snippet.title} />
                )}
                <div className="home-card-txt">
                  <h4>{item.snippet && item.snippet.title && item.snippet.title.slice(0, 80)}</h4>
                  <h5>{item.snippet && item.snippet.channelTitle}</h5>
                  <div>{item.snippet && item.snippet.channelTitle && item.snippet.channelTitle.slice(0, 1)}</div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
