import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MealBenefitParagraph from './MealBenefitParagraph';
import MealBnefitImage from './MealBenefitImage';
import mealBenfitImage1 from '../../assests/mealbenefitimag1.svg';
import Paragraph from '../Common/Paragraph';

export const MealBenefit = () =>{
    return(
        <Container className="mt-4 mb-10">
            <Row>
                <Col md={6}>
                       <MealBnefitImage
                           image={mealBenfitImage1}
                           alt="MealbenfitImage 1 "
                       />
                </Col>
                <Col md={6} className="pt-5" >
                       <Paragraph
                            data="Save 24 Hours Every Week"
                       />
                       <MealBenefitParagraph
                            data="Homemade meals cooked exactly the way you like."
                       />
                        <MealBenefitParagraph
                            data="As you use Zesty more, we get better at personalising the menu according to your taste and eating habits."
                       />
                        <MealBenefitParagraph
                            data="Don't worry about grocery shopping for the right ingredients anymore or cleaning up your dishes after an appetising meal."
                       />
                </Col>
            </Row>
        </Container>
    )
}

export default MealBenefit