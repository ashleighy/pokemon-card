import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import { Add, Delete, Star } from '@mui/icons-material';
import { useLocation } from 'react-router-dom'


import './PkmnCard.css';

const PkmnCard = ({card, passNewWishListtoParent, passNewOwnedtoParent, passRemoveCard}) => {

  function HeaderView() {
    const location = useLocation();
    return location.pathname;
  }

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="media"
          image={card.imageUrl}
          title={card.name}
        />
      </CardActionArea>
      <CardActions>
        {HeaderView() === '/' &&<IconButton onClick={() => passNewOwnedtoParent({card})} color="primary" title="Add card to owned">
          <Add/>
        </IconButton>
        }
        {HeaderView() !== '/' &&
        <IconButton onClick={() => {passRemoveCard({card})}} color="primary" title="Remove card">
          <Delete/>
        </IconButton>
        }
        {HeaderView() === '/' &&
          <IconButton onClick={() => passNewWishListtoParent({card})} color="primary" title="Add card to wishlist">
            <Star/>
          </IconButton>
        }
      </CardActions>
    </Card>
  );
}

export default PkmnCard;