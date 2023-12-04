import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/2.png';
import { Link } from 'react-router-dom';

const HeroImg = () => {
	return (
		<div className='hero'>
			<div className='mask'>
				<img className='intro-img' src={IntroImg} alt='IntroImg' />
			</div>
			<div className='content'>
				<h1>Introducing Dharura</h1>
				<p> Dharura is your one-stop solution for emergency response and community
          engagement. Stay informed about local events and incidents, connect with
          neighbors, and contribute to a safer and more resilient community.</p>
				<div>
					<Link to='/about' className='btn'>About</Link>
					<Link to='/learn' className='btn btn-light'>Learn</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;