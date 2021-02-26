import React from 'react';
import '../../style/landingpage.scss'
import { Navbar ,Nav,Container} from 'react-bootstrap';
import logo  from '../../assests/logo.svg';
import Button from '../Common/Button';
import Paragraph from '../Common/Paragraph';

const HeaderNavbar = () =>{
      return(
           <Container>
                <Navbar collapseOnSelect expand="lg"  variant="dark" >
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                        <Paragraph
                                  data="Your Own Personal Chef"
                                  className="logo-heading"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="heading-link" href="#features">Pricing</Nav.Link>
                            <Nav.Link className="heading-link" href="#pricing">Meals</Nav.Link>
                            <Nav.Link className="heading-link" href="#aboutus">About Us</Nav.Link>
                            <Nav.Link className="heading-link" href="#login">Login</Nav.Link>
                            <Button
                                title="Sign Up"
                                className="navbar-signUp-button "
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Container>
      )
}

export default HeaderNavbar

