import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
        {HeaderView() === '/' &&<Button onClick={() => passNewOwnedtoParent({card})} size="small" color="primary" title="Add card to owned">
          <Add/>
        </Button>
        }
        {HeaderView() !== '/' &&
        <Button onClick={() => {passRemoveCard({card})}} size="small" color="primary" title="Remove card">
          <Delete/>
        </Button>
        }
        {HeaderView() === '/' &&
          <Button onClick={() => passNewWishListtoParent({card})} size="small" color="primary" title="Add card to wishlist">
            <Star/>
          </Button>
        }
      </CardActions>
    </Card>
  );
}

export default PkmnCard;