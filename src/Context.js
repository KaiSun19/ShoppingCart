import React, { createContext, useContext, useState } from "react";
import {QueryClient, QueryClientProvider,  useQuery } from "react-query";
import { v4 as uuidV4 } from "uuid";

const CartContext = React.createContext() // creates a context 

export function useCart(){  // allows BudgetsContext to be used outside of BudgetsContext 
    return useContext(CartContext)
}

export const CartProvider = ({children}) =>{ // children are the budget card components 

    const [cartItems, setCartItems] = useState([])

    const inventoryItems = []

    const getCartItemsTotal = () =>{

        const total = cartItems.length

        return total
    }

    const getCartItemAmount = (price) =>{ // maps through cart items to look for repeated items and get total count of that item
        
        let amount = 0;

        cartItems.forEach(cartItem =>{
            if(cartItem.price === price){
                amount +=1;
            }
        })

        return amount
    }

    const getSubtotal = () =>{
        let subtotal = 0;
        cartItems.map( item =>{
            subtotal += item.price
        })
        return subtotal 
    }

            

    const addToCart = (item) =>{

        setCartItems(prevItems =>{
            
            return([...prevItems, {...item, id : uuidV4()}]) // add id to item when item is added to cartItems 
        })

        console.log(cartItems)
    }

    const deleteFromCart = (id) =>{ // index is the position of an item in the cartItems array and removes item by that index 
        setCartItems(prevItems =>{
            return prevItems.filter(item => item.id !== id) // always use filter when deleting item from an array 
        })
        console.log(cartItems)
    }

    const getProducts = async () =>{
    
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    
      } // continue by getting a list with all shop items 
  
      const {data, status} = useQuery("products", getProducts);

      if(data){
        data.map( item =>{
            inventoryItems.push(item)
        })
      }
    
    return(
            <CartContext.Provider
                value = {{ // these values will be passed down to any component and made available under budget provider 
                    cartItems,
                    getCartItemsTotal,
                    addToCart,
                    deleteFromCart,
                    getCartItemAmount, // start by getting amounts for each item in the cart 
                    getSubtotal,
                    inventoryItems,
                    status
                }}>
                    {children}

            </CartContext.Provider>

    )}