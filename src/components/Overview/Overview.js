import React, { useState } from 'react';
import PkmnCard from '../PkmnCard/PkmnCard.js'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import usePagination from '../../services/Pagination/Pagination.js';
import Box from '@mui/material/Box';
const Overview = ({cardData, passNewWishListtoParent, passNewOwnedtoParent, passRemoveCard}) => {

  let [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const count = Math.ceil(cardData.length / PER_PAGE);
  const data = usePagination(cardData, PER_PAGE);
  console.log(data);
  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  return (
    <div>
    <Grid container spacing={2}>
      
      {data.currentData().map((card, i) => (
          <Grid item xs={6} md={2} key={i}>
            <PkmnCard card={card} key={i} passNewWishListtoParent={passNewWishListtoParent} passNewOwnedtoParent={passNewOwnedtoParent} passRemoveCard={passRemoveCard}/>
          </Grid>
      ))}
    </Grid>
    <Box display="flex"
    justifyContent="center"
    alignItems="center"
    padding="10px">
    <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        color="primary"
        disabled={count <= 1}
    />
    </Box>
    
  </div>
  )
}

export default Overview;
