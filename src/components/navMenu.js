import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom"


const NavegationMenu = () => {
    return (
        <>
        <Navbar bg="light" expand="lg" fixed="top">
            <Container >
                <Navbar.Brand href="#">PETER PAN panadería</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link}  to="/" >Home</Nav.Link>
                        <Nav.Link as={Link}  to="/products">Productos</Nav.Link>
                        <Nav.Link as={Link}  to="/cart">Carrito</Nav.Link>

                        

                    </Nav>

                    <Form className="d-flex">

                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section> 
        </>
    )
}

export default NavegationMenu;