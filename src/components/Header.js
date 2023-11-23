import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          {/*<Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
  </Nav>*/}
        </Container>
      </Navbar>
    </>
  )
}

export default Header;