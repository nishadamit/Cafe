import React from 'react';
import '../style/landingpage.scss'
import '../style/common.scss'
import Navbar from '../components/LandingPage/Navbar';
import LandingHeader from '../components/LandingPage/LandingHeader';
import MealListFeature from '../components/LandingPage/MealFeature';
import MealBenefit from '../components/LandingPage/MealBenefit';
import CustomerReview from '../components/LandingPage/CustomerReview';
import Footer from '../components/LandingPage/Footer';



const LandingPage = () =>{
        return(
            <>
                <div className="header">
                    <Navbar />
                    <LandingHeader/>
                </div>
                <div className="meal-list" >
                    <MealListFeature/>
                    <MealBenefit/>
                </div>
                <div className="customer-review" >
                    <CustomerReview/>
                </div>
                <Footer/>
            </>
        )
}

export default LandingPage

