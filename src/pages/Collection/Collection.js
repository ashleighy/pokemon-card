import React from 'react';
import Overview from '../../components/Overview/Overview.js';

const Collection = ({ownedData, passNewOwnedtoParent, passRemoveCard}) => (
  <div>
    <h1>My Collection</h1>
    <Overview cardData={ownedData || []} passNewOwnedtoParent={passNewOwnedtoParent} passRemoveCard={passRemoveCard}/>
  </div>
);


export default Collection;
