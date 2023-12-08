import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/2.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt='Dharura Introduction' />
            </div>
            <div className='content'>
                <h1>Discover Dharura</h1>
                <p>
                    Dharura is your go-to solution for emergency response and community engagement.
                    Stay informed about local events, connect with neighbors, and contribute to a safer community.
                </p>
                <div>
                    <Link to='/get-started' className='btn btn-primary'>Get Started</Link>
                    <Link to='/explore' className='btn btn-light'>Explore Features</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;