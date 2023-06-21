import React from 'react';
import Overview from '../../components/Overview/Overview.js';

let defaultCardData = require('../../defaultCardData.json');

const Home = ({cardData, passNewWishListtoParent, passNewOwnedtoParent}) => (
  <div>
    <h1>
      Cards
    </h1>
    <Overview cardData={cardData || defaultCardData} passNewWishListtoParent={passNewWishListtoParent} passNewOwnedtoParent={passNewOwnedtoParent} />
  </div>
);

export default Home;
