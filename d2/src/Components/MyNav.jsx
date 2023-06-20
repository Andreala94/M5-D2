import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class MyNav extends Component {
    constructor(props) {
      super(props)


    }
  
         handleInputChange(event){
            const {name, value}= event.target
           this.props.onSearchChange(value)
           
        }

      //  const filteredItems = items.filter(item =>
      //     item.title.toLowerCase().includes(searchTerm.toLowerCase())



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
                <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>this.handleInputChange(event)}
            />
            <Button variant="outline-success bg-info">Search</Button>
          </Form>
         
              </Container>
            </Navbar>
          </>
      );
    }
  }
  
  export default MyNav;