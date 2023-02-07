import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';

export const Menu = () => {
    return (
        <div>
        <Navbar className='menu' collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav className='offset-10'>
                <Nav.Link href="#/home">Home</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
                <Nav.Link href="#/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </HashRouter>
        </div>
      );
    }

export default Menu;