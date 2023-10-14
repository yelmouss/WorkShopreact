import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BsSun,
    BsFillMoonStarsFill
   
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Header({dark, updateDark}) {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">Yelmouss</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={'/'} className={'nav-link'}>
                            Home
                        </NavLink>
                        <NavLink to={'/About'} className={'nav-link'}>
                            About
                        </NavLink>
                        <NavLink to={'/Works'} className={'nav-link'}>
                            Works
                        </NavLink>
                        <NavLink to={'/Services'} className={'nav-link'}>
                            Services
                        </NavLink>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>

                        <Nav.Link onClick={() => updateDark(!dark, localStorage.setItem("dark", !dark))}>
                            {dark
                                ? <BsSun />
                                : <BsFillMoonStarsFill />}

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header