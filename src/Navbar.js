import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #blue;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #blue;
    &:hover { color: white; }
  }
  .form-right {
    
    left: 80%;
    right: 5%;
  }

  .nav-center {
    position: absolute !important;
    
    color: "rgb(49, 164, 241)" !important;
    left: 33%;
    transform: translate(-50%, 0%);
  }

`;export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand  className="fa fa-twitter-square" href="/">Twitter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="position-absolute top-5 end-0 form-right">
        <FormControl type="text" placeholder="Search Twitter" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-center">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navbar;