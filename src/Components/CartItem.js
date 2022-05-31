import React from 'react'
import '../Styles/CartItem.css';
import {CartProvider, useCart} from "../Context";
import { Button } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material';


function CartItem(item) {

    const {getCartItemAmount, addToCart,deleteFromCart} = useCart()

    const amount = getCartItemAmount(item.price)  

  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className='cart-item'>
          <div className='cart-item-title'>
            <h3>{item.title}</h3>
          </div>
          <div className='information'>
            <p>Price: ${item.price}</p>
            <p>Total: ${(amount * item.price).toFixed(2)}</p>
          </div>
          <div className='cart-buttons'>
            <Button
              size='small'
              disableElevation
              variant='contained'
              className='cart-item-button'
              onClick={
                () => deleteFromCart(item.id)
              }
            >
              -
            </Button>
            <p>{amount}</p>
            <Button
              size='small'
              disableElevation
              variant='contained'
              className='cart-item-button'
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>
          <div className='cart-item-image'>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      </StyledEngineProvider>
    </>
  )
}

export default CartItem