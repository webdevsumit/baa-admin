import React from 'react';
import { useSelector } from 'react-redux';

function Description(){

	const  { productId } =  useSelector(state=>state.productDescription);
	return(
		<div>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : {productId}</h5>
			<h5>aaa : ha ha</h5>	
		</div>
	);
}

export default Description;
