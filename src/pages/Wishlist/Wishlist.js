import React from 'react';
import Overview from '../../components/Overview/Overview.js';

const Wishlist = ({wishListData, passNewWishListtoParent, passRemoveCard}) => (
  <div>
    <h1>Wishlist</h1>
    <Overview cardData={wishListData || []} passNewWishListtoParent={passNewWishListtoParent} passRemoveCard={passRemoveCard}/>
  </div>

);

export default Wishlist;
