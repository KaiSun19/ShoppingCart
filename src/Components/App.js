import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import NavBar from './NavBar';
import '../Styles/App.css';
import {Stack, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useCart} from "../Context";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';

function App() {

  const {inventoryItems} = useCart()

  const imgPaths = []

  if(inventoryItems){
    inventoryItems.map(
      item =>{
        imgPaths.push(item.image)
      }
    )
    console.log(imgPaths)
  }

  const navigate = useNavigate()

  return (

    <StyledEngineProvider injectFirst>
      <div className="App">
        <NavBar/>
        <div className = "home-page">
          <div className='home-title' >
              <Typography variant="h1" component="div" gutterBottom>
                 RLGN
              </Typography>
          </div>
          <div className = "home-desc">

            <Stack direction="row" spacing={2} justifyContent="flex-start">
              <Typography variant="h4" component="div" gutterBottom>
                    A handpicked selection of everyday items. 
              </Typography>

              <Button
                      size='large'
                      disableElevation
                      variant='outlined'
                      className='home-button'
                      sx={{ color: "black" }}
                      onClick ={() =>navigate("/ShopInventory")}
                      >
                      Shop Now 
              </Button>
            </Stack>
            
          </div>
          {inventoryItems && <div className = "home-carousel">
            <Carousel>

              {imgPaths.map(path =>{
                return(

                  <div key = {path} className="carousel-div">
                    <img src={path}  className="carousel-img"/>
                  </div>

                )
              })}
              </Carousel>
          </div>}
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
