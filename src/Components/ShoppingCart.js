import React from 'react';
import Drawer from '@mui/material/Drawer';
import {useCart} from "../Context";
import { Box, Container } from '@mui/system';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import '../Styles/ShoppingCart.css';
import { v4 as uuidV4 } from "uuid";
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@material-ui/core';


function ShoppingCart({show, handleClose}) {

  const {cartItems, getSubtotal, deleteFromCart} = useCart();

  let itemsCount = []

  const subtotal = getSubtotal();

  function deleteCartItem() {
    console.log("continue from here ")
  }

  
  return (
    <StyledEngineProvider injectFirst>
        <Drawer
        anchor="right"
        open={show}
        onClose= {handleClose}
        className = "cart-drawer"
        PaperProps={{
          sx: { width: "40%" },
        }}
      >
        <div className='close-button'>
          <CloseIcon fontSize="large" className='cart-close-icon' onClick = {handleClose}/>
        </div>
        <div className='title'>
          <Typography variant="h4" gutterBottom component="div">
            Your Shopping Bag
          </Typography>
        </div>
        {
          cartItems.map(
          item  =>{
            if(itemsCount.filter(price => price === item.price).length === 0 ){
              itemsCount.push(item.price)
              return (<CartItem {...item} key = {uuidV4()}  />)
            }
          }
        )}
        <div className='subtotal'>
          <Typography variant="h5" gutterBottom component="div">
              Subtotal :  £{subtotal.toFixed(2)}
          </Typography>
        </div>
        <div className = "checkout-button">
          <Button variant = "outlined"
             onClick = {handleClose} >Checkout</Button>
        </div>
      </Drawer>
    </StyledEngineProvider>
  )
}

export default ShoppingCart