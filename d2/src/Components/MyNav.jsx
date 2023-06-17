import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class MyNav extends Component {
    constructor(props) {
      super(props)
    }
  
    render() {
      return (
          <>
            <Navbar bg="primary" data-bs-theme="dark">
              <Container fluid className='mx-0'>
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
      );
    }
  }
  
  export default MyNav;