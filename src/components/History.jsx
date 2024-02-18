import 'animate.css';
import '../styles/history.css';
import { useContext } from 'react';
import no from '../images/no.webp';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import { GlobalContext } from '../provider/provider';

const History = () => {
  const { history, setHistory, deleteVideo } = useContext(GlobalContext);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('history');
  };

  const uniqueHistory = history.reduce((unique, video) => {
    if (!unique.some(item => item.id === video.id)) {
      unique.push(video);
    }
    return unique;
  }, []);

  return (
    <div className='history'>
      <div className="top-bar">
        <h2>Watch History</h2>
        <h4 onClick={clearHistory}>Clear All <FaTrash /></h4>
      </div>
      <div className="history-box">
        {uniqueHistory.length === 0 ? (
          <div className="no-data">
            <img src={no} alt="no-data" className='animate__animated animate__fadeInUp' />
          </div>
        ) : (
          <>
            {uniqueHistory.map((video, index) => (
              <div className="history-card animate__animated animate__fadeIn" key={index}>
                  <Link to={`/video/${video.id}`}><img src={video.snippet.thumbnails.standard.url} alt={video.snippet.title} /></Link>
                  <h3>{video.snippet.title.slice(0, 30)}</h3>
                  <div className="delete" onClick={() => deleteVideo(index)}>Delete <FaTrash /></div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default History;
