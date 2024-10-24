import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleArrowClick = () => {
        navigate('/quiz');
    };

    return (
        <div className="landing-container">
        <div className="background-image">
            <div className="title-image-container">
                <h1 className="landing-title">ZenBoost Energy</h1>
                <img src="/flash.png" alt="Energy Drink" className='landing-image'/>
            </div>
            <div className="arrow-container" onClick={handleArrowClick}>
                ➜ 
            </div>
        </div>
    </div>
    
    );
};

export default LandingPage;
