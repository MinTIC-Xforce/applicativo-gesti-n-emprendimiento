import * as React from 'react';
import Table from 'react-bootstrap/Table';


export function ShoppingCart(props) {

    const [dataList, setdataList] = React.useState([]);
    var totalShoppingCart = 0;
    React.useEffect(() => {
        setdataList(props.list);
      },[props.list]);
    
    var productRow = dataList.map(item =>
        <tr>
            <td>{item.urlImagen}  </td>
            <td>{item.nombre}   </td>
            <td>{item.cantidad} </td>
            <td>{item.precio}  </td>
            <td>{item.cantidad*item.precio}  </td>
        </tr>)


    return (
        <React.Fragment>
            <h1>Resumen de compra </h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productRow}
                </tbody>


            </Table>
            <h4> Total: {totalShoppingCart} </h4>

        </React.Fragment>

    )
}


