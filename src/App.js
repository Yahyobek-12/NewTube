// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Albums from './components/Albums';
import AlbumDetail from './components/AlbumDetail';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://your-music-api.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums: ', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Albums albums={albums} />
          </Route>
          <Route path="/albums/:id">
            <AlbumDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
