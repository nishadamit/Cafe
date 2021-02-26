import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import '../../style/landingpage.scss';
import lunchBox from '../../assests/lunch_box.svg';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';

const LandingHeader = () =>{
    return(
        <Container>
             <Row className="landing-header-main mr-2 ml-2" >
                 <Col md={7}  className="landing-paragraph" >
                            <Paragraph
                                  data="Personalised fresh home cooked"
                                  className="landing-header-paragraph"
                            />
                            <Paragraph
                                  data="food, delivered daily."
                                  className="landing-header-paragraph"
                            />
                            <Paragraph
                                  data="Put your meals on Autopilot"
                                  className="landing-header-paragraph"
                            />
                            <Paragraph
                                  data="and forget worrying about your next meal."
                                  className="landing-header-paragraph"
                            />
                            <Paragraph
                                  data="STARTING FROM AED 60/WEEK."
                                  className="landing-header-paragraph2 mt-4"
                            />
                            <Paragraph
                                  data="Save Up To 4 Hours Everyday By Never Having To Cook Again."
                                  className="landing-header-paragraph2"
                            />
                            <Paragraph
                                  data="Monthly  Weekly Plans Included!"
                                  className="landing-header-paragraph2"
                            />
                            <Button 
                                 title="Get Started"
                                 className="landing-header-getstarted"
                            />
                            <Paragraph
                                  data="*NO DELIVERY FEE."
                                  className="landing-header-paragraph2"
                            />
                            

                  </Col>
                 <Col md={5} >
                         <img className="landing-image" alt="Lunch Box" src={lunchBox} />
                 </Col>
             </Row>
        </Container>
    )
}

export default LandingHeader