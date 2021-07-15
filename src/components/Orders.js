import React,{ useState, useEffect } from 'react';
import './css/Orders.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductId } from './../redux/productDescription';
import data from './../data';

function Orders(){

	const dispatch = useDispatch();
	
	const [filteredData, setFilteredData] = useState([]);
	const [toSearch, setToSearch] = useState('');

	useEffect(()=>{
		setFilteredData(data);
	},[]);

	const onSearch=e=>{
		e.preventDefault();
		
		setFilteredData(data.filter(d=>{
			if(d.description.toUpperCase().includes(toSearch.toUpperCase())) return true;
			else if(d.productName.toUpperCase().includes(toSearch.toUpperCase())) return true;
			else return false;
		}));
		
		setToSearch('');
	}
	
	return(
		<div className='orders'>
			<form className='search-bar'>
				<input
					className='search-box'
					 type='text' 
					 placeholder='search' 
					 value={toSearch} 
					 onChange={e=>setToSearch(e.target.value)}/>
				<button 
					className='search-btn'
					type='submit' 
					onClick={onSearch}>Search</button>
			</form>
		
			{filteredData.length===0?<p>No data found</p>:
			<React.Fragment>
				{filteredData.map((d,i)=><Link 
					onClick={()=>dispatch(setProductId(d.id))}
					to={'/product/'+d.id} key={i}
					className='product-card'>
					<img src={"./"+d.imageUrl1} alt='product'/>
					<h5>{d.productName}</h5>
				</Link>)}
			</React.Fragment>}
		</div>
	);
}

export default Orders;
