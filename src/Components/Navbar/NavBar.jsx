import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from '../CartWidget/CartWidget'
import Ecommerce from './assets/Ecommerce.svg'

export const Menu = () => {
  return (

    <Navbar expand="lg" bg="primary" variant="dark" className='justify-content-center' >
      <Container>
        <Link className='img-link' to={'/'}>
          <img src={Ecommerce} alt="logo-ecommerce" /></Link>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/category/1'}>Jugueteria</Nav.Link>
          <Nav.Link as={Link} to={'/category/2'} >Libros</Nav.Link>
          <Nav.Link as={Link} to={'/category/3'} >Papelería</Nav.Link>
          <Nav.Link as={Link} to={'/category/4'} >Regalos</Nav.Link>
        </Nav>
        <CartWidget cantCart={0} />

      </Container>
    </Navbar>




  )
}

