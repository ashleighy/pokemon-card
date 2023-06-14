import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Search from './components/Search/Search.js';
import Overview from './components/Overview/Overview.js';
import Wishlist from './pages/Wishlist/Wishlist.js';
import Collection from './pages/Collection/Collection.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
let defaultCardData = require('./defaultCardData.json');

function App() {

  const [searchData, setSearchData] = useState('');
  const [cardData, setCardData] = useState('');

  const childToParent = (childdata) => {
    setSearchData(childdata);
  }

  useEffect(() => {

    let API_URL = 'https://api.pokemontcg.io/v1/cards';

    function getMons(searchData) {
      axios
        .get(`${API_URL}?name=${searchData}`)
        .then(resp => {
          setCardData(resp);
          console.log("resp", resp);
        })
        .catch(err => {
          console.error(err);
        });
    }
    if (!searchData) {
      return;
    }
    return getMons(searchData);
  }, [searchData]);

  return (
    <div className="App">
      <Router>
        <Search childToParent={childToParent} />
        <Box component="span" m={1}>
          <Container maxWidth="sm">

            <Routes>
              <Route exact path='/' element={<Overview cardData={cardData || defaultCardData} />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/collection' element={<Collection />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </div>
  );
}

export default App;
