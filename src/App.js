import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Search from './components/Search/Search.js';
import Wishlist from './pages/Wishlist/Wishlist.js';
import Home from './pages/Home/Home.js';
import Collection from './pages/Collection/Collection.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes, Route, useLocation }
  from 'react-router-dom';

function App() {

  const [searchData, setSearchData] = useState('');
  const [cardData, setCardData] = useState('');
  const [wishListData, setWishListData] = useState(localStorage.getItem('wishListData') ? JSON.parse(localStorage.getItem('wishListData')) : []);
  const [ownedData, setOwnedData] = useState(localStorage.getItem('ownedData') ? JSON.parse(localStorage.getItem('ownedData')) : []);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('wishListData', JSON.stringify(wishListData));
  }, [wishListData]);

  useEffect(() => {
    localStorage.setItem('ownedData', JSON.stringify(ownedData));
  }, [ownedData]);

  const passSearchtoParent = (childdata) => {
    setSearchData(childdata);
  }

  const passNewWishListtoParent = (childdata) => {
    setWishListData([...wishListData, childdata.card]);
  }

  const passNewOwnedtoParent = (childdata) => {
    setOwnedData([...ownedData, childdata.card]);
  }

  const passRemoveCard = (childData) => {
    if(location.pathname === '/wishlist') {
      setWishListData(oldValues => {
        return oldValues.filter(card => card !== childData.card)
      })
    }
    if(location.pathname === '/collection') {
      setOwnedData(oldValues => {
        return oldValues.filter(card => card !== childData.card)
      })
    }
  }


  useEffect(() => {

    let API_URL = 'https://api.pokemontcg.io/v1/cards';

    function getMons(searchData) {
      axios
        .get(`${API_URL}?name=${searchData}`)
        .then(resp => {
          setCardData(resp.data.cards);
          console.log("resp", resp.data.cards);
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
        <Search passSearchtoParent={passSearchtoParent} />
        <Box component="span" m={1}>
          <Container maxWidth="sm">
            <Routes>
              <Route exact path='/' element={<Home cardData={cardData} passNewWishListtoParent={passNewWishListtoParent} passNewOwnedtoParent={passNewOwnedtoParent}/>} />
              <Route path='/wishlist' element={<Wishlist wishListData={wishListData} passRemoveCard={passRemoveCard} />} />
              <Route path='/collection' element={<Collection ownedData={ownedData} />} />
            </Routes>
          </Container>
        </Box>
    </div>
  );
}

export default App;
