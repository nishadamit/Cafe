import React from 'react';
import {Container,Row,Col,Card } from 'react-bootstrap';
import Paragraph from '../Common/Paragraph';
import featureIcon from '../../assests/feature_icon.svg';
import {MEALFEATURELIST } from '../../shared/MealFeatureList';


const MealFeature = () =>{

    console.log("meal feature list",MEALFEATURELIST)
   
    return(
      <Container className="meal-list" >
          <Row className="mt-5">
              <Col className="meal-list-heading text-center">
                     <Paragraph
                         data="How Zesty Does it's Magic"
                         className="feature-heading"
                     />
                     <img src={featureIcon} alt="Feature Icon" />
              </Col>
          </Row>
          <Row>
               {
                   MEALFEATURELIST.map((data) =>{
                        return <Col md={4} key={data.id} >
                            <Card className="mt-1">
                                <div className="mealfeature-card-image">
                                    <Card.Img src={data.image}/>
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>{data.description}</Card.Text>
                                </Card.Body>
                            </Card>
                         </Col>
                   })
               }
          </Row>
      </Container>
    )
}

export default MealFeature;