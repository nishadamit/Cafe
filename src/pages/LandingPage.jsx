import React from 'react';
import '../style/landingpage.scss'
import Navbar from '../components/LandingPage/Navbar';
import LandingHeader from '../components/LandingPage/LandingHeader'


const LandingPage = () =>{
        return(
            <>
                <div className="header">
                    <Navbar />
                    <LandingHeader/>
                </div> 
            </>
        )
}

export default LandingPage

