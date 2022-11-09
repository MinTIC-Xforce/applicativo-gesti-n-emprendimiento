import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import  Home  from './home';
import { ListOfProducts } from "./listOfProducts";
import { ShoppingCart } from "./shoppingCart";
import NavegationMenu from './navMenu';
import  Contact  from './contact';
export const Navegacion = ({ rol }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavegationMenu />}>
          <Route index element={<Home />} />
          <Route path='products' element={<ListOfProducts />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};