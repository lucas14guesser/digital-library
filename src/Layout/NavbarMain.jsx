import React from "react"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../Styles/NavBarMain.css'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <Container>
      <Navbar>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/ebooks">E-Books</Link>
          <Link to="/afiliacoes">Afiliações</Link>
          <Link to="/como-acessar">Como Acessar</Link>
        </Nav>
    </Navbar>
    </Container>
  )
}

export default NavbarMain