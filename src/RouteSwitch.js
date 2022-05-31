import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import ItemPage from "./Components/ItemPage";
import ShopInventory from "./Components/ShopInventory";
import {useCart} from "./Context";

const RouteSwitch = () => {

  const {inventoryItems} = useCart();

  return (
    <BrowserRouter>

    {inventoryItems && (
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ShopInventory" element={<ShopInventory />} />

        {/* start with a notebook about why i spent so long on getting the item routes to work */}
        

        {inventoryItems.map(
          item =>{
            let itemTitle = item.title;
            return(<Route path= {`/${itemTitle.replace(/ /g, '%20')}`} element = {<ItemPage {...item} />} key = {item.id} />)
          }                
          )}


      </Routes>
    )}
    </BrowserRouter>
  );
};

export default RouteSwitch;