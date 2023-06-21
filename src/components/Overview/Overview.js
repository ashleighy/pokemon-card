import React from 'react';
import PkmnCard from '../PkmnCard/PkmnCard.js'
import Grid from '@mui/material/Grid'

const Overview = ({cardData, passNewWishListtoParent, passNewOwnedtoParent}) => {
  return (
    <div>
    <Grid container spacing={2}>
      
      {cardData.map((card, i) => (
          <Grid item xs={6} key={i}>
            <PkmnCard card={card} key={i} passNewWishListtoParent={passNewWishListtoParent} passNewOwnedtoParent={passNewOwnedtoParent}/>
          </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default Overview;
