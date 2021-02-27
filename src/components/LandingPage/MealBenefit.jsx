import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MealBenefitParagraph from './MealBenefitParagraph';
import MealBnefitImage from './MealBenefitImage';
import mealBenfitImage1 from '../../assests/mealbenefitimag1.svg';
import mealBenfitImage2 from '../../assests/mealbenefitimag2.svg';
import mealBenfitImage3 from '../../assests/mealbenefitimag3.svg';
import {Paragraph1,Paragraph2} from '../Common/Paragraph';
import Button from '../Common/Button';

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
                       <Paragraph1
                            data="Save 24 Hours Every Week"
                            className="meal-benefit-heading"
                       />
                       <Paragraph2
                            data="Automating your Meals With Zesty Will Give A Day Back To You Every Week!"
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
                       <Button
                           title="Subscribe Now"
                           className="meal-benefit-subscribe-button"
                       />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6} >
                       <Paragraph1
                            data="We Think About Great Meal Ideas Just For You"
                            className="meal-benefit-heading"
                       />
                       <Paragraph2
                            data="As We Learn About The Cuisines You Like And Your Diet Requirements. Our Algorithm Designs Custom Menus For You!"
                       />
                       <MealBenefitParagraph
                            data="Don't have to fight decision fatigue about what to cook next"
                       />
                        <MealBenefitParagraph
                            data="Amazing variety from the best chefs specialised in cooking the particular cuisines."
                       />
                        <MealBenefitParagraph
                            data="Made fresh and healthy, making sure it's tasty as well as affordable."
                       />
                       <Button
                           title="Get Your Meal Now"
                           className="meal-benefit-subscribe-button"
                       />
                </Col>
                <Col md={6} className="pt-3" >
                       <MealBnefitImage
                           image={mealBenfitImage2}
                           alt="MealbenfitImage 1 "
                       />
                </Col>
            </Row>
            <Row  className="mt-4">
                <Col className="pt-5"  md={6}>
                       <MealBnefitImage
                           image={mealBenfitImage3}
                           alt="MealbenfitImage 1 "
                       />
                </Col>
                <Col md={6} >
                       <Paragraph1
                            data="Why Zesty?"
                            className="meal-benefit-heading"
                       />
                       <Paragraph2
                            data="Subscribe for weekly or monthly options and let Zesty take care of your every day breakfast, lunch and dinner."
                       />
                       <MealBenefitParagraph
                            data="As you continue using Zesty, our software learns about your likes and dislikes and matches you like. We work with the most talented and divers chefs so that you don't have to worry about what to cook for dinner or waste time doing groceries and cleaning."
                       />
                        <MealBenefitParagraph
                            data="Unlike restaurant delivery companies where prices are too expensive and the food is not something you can eat for every meal and every day, Zesty makes sure the prices are the most affordable and uses technology to keep the meals personalised according to you."
                       />
                        <MealBenefitParagraph
                            data="We have diverse cuisines ranging from North Indian, Chinese, Italian to Filipino, Arabic and South Indian. We will keep adding more cuisines and chefs on our platform based on your choices and feedback."
                       />
                </Col>
            </Row>
        </Container>
    )
}

export default MealBenefit