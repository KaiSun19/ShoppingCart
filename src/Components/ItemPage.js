import { Button, Typography } from '@material-ui/core'
import { Stack, StyledEngineProvider } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import {CartProvider, useCart} from "../Context";
import '../Styles/ItemPage.css';

function ItemPage(item) {

    const {addToCart} = useCart()

  return (
    <div>
        <StyledEngineProvider injectFirst>
        <NavBar />
        <div className = "item-page">

            <Stack  direction="row" spacing={2} justifyContent="center">

                <div className='item-title' >
                    <Typography variant="h3" component="div" gutterBottom>
                        {item.title}
                    </Typography>
                </div>
                <div className='item-image'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='item-desc'>
                    <Typography variant="h4" component="div" gutterBottom>
                            {item.description}
                    </Typography>
                </div>

            </Stack>
               
        </div>

        <div className='checkout-section'>

            <div className='item-price'>
                <Typography variant="h4" component="div" gutterBottom>
                    £ {item.price}
                </Typography>
            </div>

            <div className='cart-button'>
                <Button
                    size='large'
                    disableElevation
                    variant='contained'
                    className='item-button'
                    onClick={() => addToCart(item)}
                    >
                    Buy it now 
                </Button>
            </div>

        </div>
        
        </StyledEngineProvider>
    </div>
  )
}

export default ItemPage