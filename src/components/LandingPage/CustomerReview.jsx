import React,{useState} from 'react';
import { Col, Container, Row,Carousel } from 'react-bootstrap';
import {Paragraph1 } from '../Common/Paragraph';
import { CUSTOMERREVIEW } from '../../shared/CustomerReview';

export const CustomerReview = () =>{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
       setIndex(selectedIndex);
     };

      return(
        <Container fluid className="mt-5">
            <Paragraph1
                data="What Our Customers Says"
                className="heading"
            />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    CUSTOMERREVIEW.map((data,index) =>{
                             return(
                                <Carousel.Item key={index} className="customer-review-crousel" activeIndex={index} onSelect={handleSelect} >
                                    <Carousel.Caption>
                                            <div className="customer-review-box">
                                                <div className="customer-review-image" >
                                                    <img src={data.image} alt={data.name}  />
                                                </div>
                                                <h3 style={{color:'black'}}>{data.name}</h3>
                                                <p style={{color:'black'}}>{data.review}</p>
                                            </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                             )
                        })
                }
            </Carousel>
        </Container>
      )
}

export default CustomerReview;