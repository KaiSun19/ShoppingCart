import React from 'react';
import '../Styles/NavBar.css';
import { useState , useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Badge, IconButton, StyledEngineProvider, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCart from './ShoppingCart';
import {useCart} from "../Context"
import { Menu, MenuItem, TextField } from '@material-ui/core';


function NavBar() { 

    const navigate = useNavigate()

    const [openCart, setOpenCart] = useState(false)

    const handleClose = () =>{

        setOpenCart(false)
    }

    const [ searchBarOpen , setSearchBarOpen] = useState(false)

    const {getCartItemsTotal} = useCart()

    const totalCartItems = getCartItemsTotal()

    console.log(totalCartItems)

    const [anchor, setAnchor] = useState(null); // sets position of anchor 

    const openMenu = (e) => {
        setAnchor(e.currentTarget);
      };
    
      const closeMenu = () => {
        setAnchor(null);
      };    

  return (
    <>
    <StyledEngineProvider injectFirst>
        <Box sx={{ flexGrow: 1 }} className = "box">
            <AppBar position="static" className = "app-bar">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontWeight: 'bold'}}
                        onClick ={() =>navigate("/")}
                        className = "home-icon"
                        >
                        RLGN
                    </Typography>
                    <Stack spacing={5} direction="row">
                        <IconButton
                        onClick ={() =>navigate("/ShopInventory")}
                        sx={{ color: "black" }}
                        variant="contained"
                        >
                            <Typography variant="button" display="block" gutterBottom>
                                Shop
                            </Typography>
                        </IconButton>
                        <IconButton
                        onClick ={() =>{
                            const searchField = document.getElementsByClassName('search-field').item(0);
                            if(searchBarOpen === false){
                                searchField.style.width = "100%"
                                searchField.style.visibility = "visible"
                                setSearchBarOpen(true)
                            }
                            else if(searchBarOpen === true){
                                searchField.style.width = "0"
                                searchField.style.visibility = "hidden"
                                setSearchBarOpen(false)
                            }
                        
                        }}
                        sx={{ color: "black" }}
                        variant="contained"
                        className = "search-icon"
                        >
                            <SearchIcon/>

                        </IconButton>
                        <TextField id="outlined-basic"  variant="outlined" className='search-field'/>
                        <IconButton
                        onClick ={() => setOpenCart(true)}
                        sx={{ color: "black" }}
                        variant="contained"
                        >
                            <Badge badgeContent = {totalCartItems} color = "error">
                                <LocalMallIcon/>
                            </Badge>
                        </IconButton>
                </Stack>
                </Toolbar>
            </AppBar>
            <ShoppingCart show =  {openCart} handleClose = {handleClose}/>
        </Box>
      </StyledEngineProvider>
    </>
  )
}

export default NavBar