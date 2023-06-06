import React from 'react';
import PropTypes from 'prop-types';
import PkmnCard from '../PkmnCard/PkmnCard.js'
import Grid from '@mui/material/Grid'

const Overview = () => {

  const cards = ["Misty", "Weedle", "Mudkip"];

  return (
    <div>
    <h2>
      Cards
    </h2>
    <Grid container spacing={2}>
      {cards.map(card => (
          <Grid item xs={6}>
            <PkmnCard/>
          </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default Overview;
