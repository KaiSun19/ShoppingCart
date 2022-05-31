import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRef } from "react";
import '../Styles/IndividualProduct.css';
import {useCart} from "../Context";


function IndividualProduct(product) {

    const {addToCart} = useCart()

  return (
    <Card sx={{ maxWidth:  400, height : 550}} className = "card">
    <CardActionArea>
      <CardMedia
        component="img"
        image={product.image}
        alt="product item"
        className='card-image'
      />
      <div>
        <CardContent className = "card-content">
            <Typography gutterBottom variant="h5" component="div">
            {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className = "description"
                sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}>
                {product.description}
            </Typography>
            <div className = "card-bottom">
                <Typography className = "price">£{product.price}</Typography>
                <AddIcon fontSize="large" className='add-icon' onClick = {() => addToCart(product)}/>
            </div>
        </CardContent>
      </div>
    </CardActionArea>
  </Card>
  )
}

export default IndividualProduct