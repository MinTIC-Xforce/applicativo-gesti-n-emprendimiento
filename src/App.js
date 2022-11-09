
import './App.css';
import JsonDataProducts from './data/listOfProducts.json';

import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


//componente
import { ListOfProducts } from "./components/listOfProducts";
import { ShoppingCart } from './components/shoppingCart';
import { Fragment } from 'react';
import NavegationMenu from './components/navMenu';
import Home from './components/home';
import Contact from './components/contact';

//primera que se lanza!! 
function App() {

  const [cart,setCart] = React.useState([]);

  const handleItem = (item)=> {
    if (item !== undefined){
      setCart([...cart, item ]);
      console.log('adentro')
      console.log(item)
    }
    
    
  };

  return (

    <div className="App">
      <Fragment>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavegationMenu />} >
              <Route index element={<Home />} />
              <Route path='products' element={<ListOfProducts list={JsonDataProducts.productos}  handleItem = {handleItem} />} />
              <Route path='cart' element={<ShoppingCart list={cart}  />} />
              <Route path='contact' element={<Contact />} />
              <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </Fragment>
    </div>
  );
}

export default App;
