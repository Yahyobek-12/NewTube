import { createContext, useState, useEffect } from 'react'
import { homeVideo_API, shortsVideo_API } from '../store/store';
    
export const GlobalContext = createContext()

const Provider = ({ children }) => {
  const [shortVideos, setShortVideos] = useState([]);
  const [homeVideos, setHomeVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(homeVideo_API)
      .then((response) => response.json())
      .then(data => {
        setLoading(false);
        console.log('Home', data)
        setHomeVideos(data.items)
      })
  }, [])

  useEffect(() => { 
      fetch(shortsVideo_API)
        .then((response) => response.json())
        .then(data => {
          setLoading(false)
          setShortVideos(data.items)
        })
    }, [loading]);

  return (
    <GlobalContext.Provider value={{ shortVideos, homeVideos, loading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider
