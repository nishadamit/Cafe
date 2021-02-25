import React from 'react';
import '../../style/landingpage.scss'
import { Navbar ,Nav,Container,Button} from 'react-bootstrap';
import logo  from '../../assests/logo.svg'

const HeaderNavbar = () =>{
      return(
           <Container>
                <Navbar collapseOnSelect expand="lg"  variant="dark" >
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                        <p className="logo-heading" >Your Own Personal Chef</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="heading-link" href="#features">Pricing</Nav.Link>
                            <Nav.Link className="heading-link" href="#pricing">Meals</Nav.Link>
                            <Nav.Link className="heading-link" href="#aboutus">About Us</Nav.Link>
                            <Nav.Link className="heading-link" href="#login">Login</Nav.Link>
                            <Button>Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           </Container>
      )
}

export default HeaderNavbar

