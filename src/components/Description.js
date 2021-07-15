import React from 'react';
import './css/Description.css';
import Nav from './Nav';
import data from './../data';
import { useSelector } from 'react-redux';

function Description(){
	
	const  { productId } =  useSelector(state=>state.productDescription);
	const prdct = data[productId];
	
	return(
		<div>
			<Nav/>
			<div className="description-main-div">
			
				<h5>Product Name : {prdct.productName}</h5>
				<img src="./logo.png" alt='product'/>

			</div>
		</div>
	);
}

export default Description;
