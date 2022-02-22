import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/post">Add Post</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
