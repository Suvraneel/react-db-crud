import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Create from "./create"  
import Update from "./update"  
import { Outlet, Link } from "react-router-dom";

export default function CRUDnav() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">API Operations</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link><Link to="/create">Create</Link> |{" "}</Nav.Link>
                        <NavDropdown title="Find" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Find by Title</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Find By Artist</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3"><Link to="/findOne">Find One</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Find All</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Link><Link to="/update">Update</Link></Nav.Link>
                        <Nav.Link href="#del">Delete</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}
