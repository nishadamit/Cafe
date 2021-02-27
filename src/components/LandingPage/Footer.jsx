import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {Paragraph1} from '../Common/Paragraph';
import logo  from '../../assests/logo.svg';

export const HomeFooter = () =>{
      return(
          <Container className="footer mt-5">
              <Row>
                  <Col md={3} sm={6}>
                     <div className="footer-image" >
                         <img src={logo} />
                     </div>
                     <Paragraph1
                         data="Your Own Personal Chef"
                         className="logo-heading"                   
                     />
                  </Col>
                  <Col md={3} sm={6}>
                     <ul>
                         <li><h3>PRODUCT</h3></li>
                         <li>Meals</li>
                         <li>Pricing</li>
                         <li>Contact Us</li>
                     </ul>
                  </Col>
                  <Col md={3} sm={6}>
                     <ul>
                         <li><h3>COMPANY</h3></li>
                         <li>Get Started</li>
                         <li>About Us</li>
                         <li>Contact Us</li>
                     </ul>
                  </Col>
                  <Col md={3} sm={6}>
                     <ul>
                         <li><h3>PRODUCT</h3></li>
                         <li>Meals</li>
                         <li>Pricing</li>
                         <li>Contact Us</li>
                     </ul>
                  </Col>
              </Row>
              <Row > 
                  <Col>
                   <ul className="last-footer">
                         <li>©2020 Zesty Allright Resrved</li>
                         <li>Terms & Condition </li>
                         <li> Privacy Policy</li>
                     </ul>
                  </Col>
              </Row>
          </Container>
      )
}

export default HomeFooter