import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../provider/provider';

const Similar = () => {
  const { homeVideos } = useContext(GlobalContext);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {homeVideos.map(item => (
        <Link to={`/video/${item.id}`} className="similar-card" onClick={handleLinkClick} key={item.id}>
          <div className="similar-card-div">
              {item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.standard && (
                <img src={item.snippet.thumbnails.standard.url} alt={item.snippet.title} />
              )}
              <p>{item.snippet.title}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Similar;
