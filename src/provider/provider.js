import { createContext, useState, useEffect } from 'react'
import { homeVideo_API, shortsVideo_API } from '../store/store';
    
export const GlobalContext = createContext()

const Provider = ({ children }) => {
  const historyData = JSON.parse(localStorage.getItem('history')) || []
  const [history, setHistory] = useState(historyData);
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

  const saveToHistory = (videoData) => {
    const updateHistory = [...history, videoData]
    setHistory(updateHistory)
    localStorage.setItem('history', JSON.stringify(updateHistory))
  }

  const deleteVideo = (index) => {
    const newHistory = [...history]
    newHistory.splice(index, 1)
    setHistory(newHistory)
    localStorage.setItem('history', JSON.stringify(newHistory))
  }

  return (
    <GlobalContext.Provider value={{ shortVideos, homeVideos, loading, history, setHistory, saveToHistory, deleteVideo }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider
