import React from 'react';
import '../../style/landingpage.scss';
import { Container,Row,Col} from 'react-bootstrap';
import lunchBox from '../../assests/lunch_box.svg';
import { Button } from 'bootstrap';

const LandingHeader = () =>{
    return(
        <Container>
             <Row className="landing-header-main mr-2 ml-2" >
                 <Col md={6}  className="landing-paragraph" >
                            <p className="landing-header-paragraph" > Personalised fresh home cooked</p>
                            <p className="landing-header-paragraph" >food, delivered daily.</p>
                            <p className="landing-header-paragraph" >Put your meals on Autopilot</p>
                            <p className="landing-header-paragraph" >and forget worrying about your next meal.</p>

                             <p className="landing-header-paragraph2 mt-4"> STARTING FROM AED 60/WEEK.</p>
                             <p  className="landing-header-paragraph2">Save Up To 4 Hours Everyday By Never Having To Cook Again.</p>
                             <p  className="landing-header-paragraph2">Monthly  Weekly Plans Included!</p>
                             

                  </Col>
                 <Col md={6} >
                         <img className="landing-image" src={lunchBox} />
                 </Col>
             </Row>
        </Container>
    )
}

export default LandingHeader