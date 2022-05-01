import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSingOut  = () =>{
        signOut(auth);
    }
    return (

        <>
            <Navbar className='mb-5' collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">
                                about
                            </Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="/addservice">
                                addService
                            </Nav.Link>
                            <Nav.Link as={Link} to="/manage">
                                Management
                            </Nav.Link>
                                </>
                            }
                            {
                                user ?<button className='btn btn-link text-white text-decoration-none' onClick={handleSingOut}>Sing out</button>:<Nav.Link as={Link} to="/login">Login</Nav.Link>  
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;