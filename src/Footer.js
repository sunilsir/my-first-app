import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Footer = () => {
    return (
        <div className="footer">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
              <Nav className='offset-5'>
                <Nav.Link href="https://www.r3sys.com/">&copy; R3 Systems India Private Limited</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        </div>
      );
}

export default Footer;