import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function HeaderNav() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/user-dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/profile-page'>Profile</Nav.Link>
            <Nav.Link href='/login'>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
