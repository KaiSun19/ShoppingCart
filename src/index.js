import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import RouteSwitch from './RouteSwitch';
import { CartProvider } from './Context';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <QueryClientProvider client={client} contextSharing={true}>

      <CartProvider>

        <RouteSwitch/>

      </CartProvider>
      
    </QueryClientProvider>
  
);
