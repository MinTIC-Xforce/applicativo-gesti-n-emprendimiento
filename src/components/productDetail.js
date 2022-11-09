import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import logo from '../logo.svg';

export function ProductsDetail(props) {


    const [productClicked, setProductClicked] = React.useState();

    const xxx = () => {
        setProductClicked((productClicked) => {
            return {
                imagen: props.urlImagen,
                nombre: props.nombre,
                precio: props.precio,
                cantidad: "1",
                subtotal: props.precio
            }
        })
        props.handleItem(productClicked);
    }

    function setProductClickedHandler() {
        this.setProductClicked((productClicked) => {

            return setProductClicked.push({
                imagen: props.urlImagen,
                nombre: props.nombre,
                precio: props.precio,
                cantidad: "1",
                subtotal: props.precio
            })
        }
        );
    }




    return (
        <React.Fragment>
            <div>
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>{props.nombre}</Card.Header>
                    <Card.Img src={logo}  height="30%" alt="Card image" />
                    <Card.Body>
                       
                        <Card.Text>
                        {props.caracteristica}
                        {props.urlImagen}
                        </Card.Text>
                        <Card.Title class="d-flex justify-content-around align-items-center"> 
                        $ {props.precio} 
                        <Button variant="secondary" onClick={xxx} > Añadir al carrito</Button>{' '}
                        </Card.Title>
                    </Card.Body>
                </Card>
                <br />
            </div>

        </React.Fragment>



    )
}