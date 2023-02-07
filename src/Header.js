import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <Navbar className='bg-primary'>
          <Container>
            <Navbar.Brand className='text-white' href="#home">R3 Systems</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className='text-white'>
                Contact us: <a className='text-white' href="#login">8600180045</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;