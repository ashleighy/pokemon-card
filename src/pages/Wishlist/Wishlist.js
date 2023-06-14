import React from 'react';
import Overview from '../../components/Overview/Overview.js';

const Wishlist = ({wishListData, passNewWishListtoParent}) => (
  <div>
    <h1>Wishlist</h1>
    <Overview cardData={wishListData || []} passNewWishListtoParent={passNewWishListtoParent}/>
  </div>

);

export default Wishlist;
