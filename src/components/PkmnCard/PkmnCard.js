import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Add, Delete, Star } from '@mui/icons-material';

import './PkmnCard.css';


const PkmnCard = ({card}) => {
  console.log(card);
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="media"
          image={card.images.small}
          title={card.name}
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {card.flavorText}
          </Typography>
        </CardContent> */}
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" title="Add card to owned">
          <Add/>
        </Button>
        <Button size="small" color="primary" title="Remove card">
          <Delete/>
        </Button>
        <Button size="small" color="primary" title="Add card to wishlist">
          <Star/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PkmnCard;