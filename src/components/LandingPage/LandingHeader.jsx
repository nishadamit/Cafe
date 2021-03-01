import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import '../../style/landingpage.scss';
import lunchBox from '../../assests/lunch_box.svg';
import {Paragraph1,Paragraph2} from '../Common/Paragraph';
import { Button1 } from '../Common/Button';

const LandingHeader = () =>{
    return(
        <Container>
             <Row className="landing-header-main mr-2 ml-2" >
                 <Col md={7}  className="landing-paragraph" >
                    <div className="landing-header-paragraph">
                           <Paragraph2
                                  data="Personalised fresh home cooked"
                            />
                            <Paragraph2
                                  data="food, delivered daily."
                            />
                            <Paragraph2
                                  data="Put your meals on Autopilot"
                            />
                            <Paragraph2
                                  data="and forget worrying about your next meal."
                            />
                  </div>
                   <div className="landing-header-paragraph2 mt-4">
                            <Paragraph2
                                  data="STARTING FROM AED 60/WEEK."
                            />
                            <Paragraph2
                                  data="Save Up To 4 Hours Everyday By Never Having To Cook Again."
                            />
                            <Paragraph2
                                  data="Monthly  Weekly Plans Included!"
                            />
                            <Button1 
                                 title="Get Started"
                                 className="landing-header-getstarted"
                            />
                            <Paragraph2
                                  data="*NO DELIVERY FEE."
                            />
                    </div>
                            

                  </Col>
                 <Col md={5} >
                         <img className="landing-image" alt="Lunch Box" src={lunchBox} />
                 </Col>
             </Row>
        </Container>
    )
}

export default LandingHeader