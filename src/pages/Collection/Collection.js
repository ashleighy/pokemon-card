import React from 'react';
import Overview from '../../components/Overview/Overview.js';

const Collection = ({ownedData, passNewOwnedtoParent}) => (
  <div>
    <h1>My Collection</h1>
    <Overview cardData={ownedData || []} passNewOwnedtoParent={passNewOwnedtoParent}/>
  </div>
);


export default Collection;
