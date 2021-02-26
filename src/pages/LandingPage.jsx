import React from 'react';
import '../style/landingpage.scss'
import Navbar from '../components/LandingPage/Navbar';
import LandingHeader from '../components/LandingPage/LandingHeader';
import MealListFeature from '../components/LandingPage/MealFeature';
import MealBenefit from '../components/LandingPage/MealBenefit';


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
            </>
        )
}

export default LandingPage

