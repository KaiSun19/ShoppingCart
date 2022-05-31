import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from "react-query";
import IndividualProduct from './IndividualProduct';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import '../Styles/ShopInventory.css';
import { ReactQueryDevtools } from 'react-query/devtools'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useCart} from "../Context";
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom";


function ShopInventory() {

  const navigate = useNavigate()

  const [anchor, setAnchor] = useState(null); // sets position of anchor 

  const [currentFilter, setCurrentFilter] = useState(null)

  const {cartItems, addToCart, inventoryItems} = useCart()

  const openMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
  };

  const setFilterToNull = () =>{
    setAnchor(null)
    setCurrentFilter(null)
  }

  const onMenuItemClick = (event) => {
    setAnchor(null);
    setCurrentFilter(event.currentTarget.innerText)
  };

  // const getProducts = async () =>{
    
  //     const res = await fetch('https://fakestoreapi.com/products')
  //     return res.json()
  
  //   }

    //const {data, status} = useQuery("products", getProducts);

    const categories = [];
          
    if(inventoryItems && categories.length == 0 ){

      inventoryItems.map( product =>{ 

          if(!categories.includes(product.category)){categories.push(product.category)} 
      })
    }


  return (
    <>
    <StyledEngineProvider injectFirst>
      <NavBar />
      <div>
        {inventoryItems &&
          <Box sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" className = "title">
              Shop Now
            </Typography>

            <div className='menu-button'>

              <IconButton
                onClick={openMenu}
                sx={{ color: "black" }}
                variant="contained"
              >
                <MenuIcon/>
              </IconButton>

              <Menu
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={closeMenu}
                keepMounted
              >
                {categories.map( category =>{
                  return (<MenuItem key = {category} onClick={onMenuItemClick}>{category}</MenuItem>)
                })}
                <MenuItem key = "default" onClick={setFilterToNull}>Reset</MenuItem>

              </Menu>
            </div>

            <Grid container spacing={2} className = "grid">
              {console.log("creating grid ")}
              {currentFilter === null ?
              inventoryItems.map(product =>{
                  return (
                    <div key={product.id} className = "grid-item-div" onClick ={() =>navigate(`/${product.title}`)}>
                        <Grid item key = {product.title}>
                        <IndividualProduct {...product}/>
                      </Grid>
                    </div>
                  )})
            : inventoryItems.map(product =>{
              if(currentFilter == product.category){
              return (
                <div key={product.id} className = "grid-item-div" onClick ={() =>navigate(`/${product.title}`)}>
                    <Grid item key = {product.title}>
                    <IndividualProduct {...product}/>
                  </Grid>
                </div>)
              }}) }
            </Grid>
          </Box>
    }
      </div>
    </StyledEngineProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default ShopInventory