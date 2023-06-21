import React from 'react';
import PkmnCard from '../PkmnCard/PkmnCard.js'
import Grid from '@mui/material/Grid'

const Overview = ({cardData, passNewWishListtoParent, passNewOwnedtoParent, passRemoveCard}) => {
  return (
    <div>
    <Grid container spacing={2}>
      
      {cardData.map((card, i) => (
          <Grid item xs={6} md={3} key={i}>
            <PkmnCard card={card} key={i} passNewWishListtoParent={passNewWishListtoParent} passNewOwnedtoParent={passNewOwnedtoParent} passRemoveCard={passRemoveCard}/>
          </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default Overview;
