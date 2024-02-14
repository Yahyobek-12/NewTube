import axios from 'axios';
import { createContext, useState, useEffect } from 'react'
    
export const GlobalContext = createContext()

const Provider = ({ children }) => {
  const [shortVideos, setShortVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'NewTube || Shorts'

      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            'https://youtube.googleapis.com/youtube/v3/videos',
            {
              params: {
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                maxResults: 200,
                regionCode: 'SA',
                key: 'AIzaSyBqE8OMbdKd-7NOT_LBvkgATb8huk3sPHI'
              }
            }
          );
          setLoading(false);
          console.log(response.data.items);
          setShortVideos(response.data.items);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };
  
      fetchVideos();
    }, [loading]);

  return (
    <GlobalContext.Provider value={{ shortVideos, loading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider
