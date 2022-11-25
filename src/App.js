import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";  
import { BrowserRouter as Router } from "react-router-dom"
import { ProductosLista } from "./componentes/Productos/index.js"

function App() {
  return (
    <div className="App">
 
      <Header />
      <ProductosLista/>

    </div>
  );
}

export default App;
