import * as React from 'react';
import { ProductsDetail } from './productDetail';

export function ListOfProducts(props) {

    let products = props.list;

    const productDetail = products.map(product =>
        <ProductsDetail
            urlImagen={product.urlImagen}
            id = {product.id}
            nombre = {product.nombre} 
            precio = {product.precio}
            caracteristica = {product.características}
            handleItem = {props.handleItem}
            />)

    return (
        <React.Fragment>

            <h1> Lista de productos </h1>
            <div  class="d-flex justify-content-evenly flex-wrap">  {productDetail}  </div>

        </React.Fragment>


    )
}