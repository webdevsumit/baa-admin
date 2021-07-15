import React from 'react';
import './css/homePage.css';

import Nav from './Nav';
import Orders from './Orders'

function HomePage(){
	return(
		<div className='home-page'>
		
			<Nav/>
			<Orders/>
		</div>
	);
}

export default HomePage;
