import React,{ useState, useEffect } from 'react';
import './css/Orders.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductId } from './../redux/productDescription';

const data = [
			{
				'id' : 1,
				'imageUrl1' : 'logo.png',
				'productName' : 'dada powder for germs',
				'description' : 'aaloo pyaj bhindi.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 2,
				'imageUrl1' : 'logo.png',
				'productName' : 'korashan',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 3,
				'imageUrl1' : 'logo.png',
				'productName' : 'Keetnashak liquid',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 4,
				'imageUrl1' : 'logo.png',
				'productName' : 'powder',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 5,
				'imageUrl1' : 'logo.png',
				'productName' : 'pestcide is there',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 6,
				'imageUrl1' : 'logo.png',
				'productName' : 'Keetnashak powder',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 7,
				'imageUrl1' : 'logo.png',
				'productName' : 'davai',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			},
			{
				'id' : 8,
				'imageUrl1' : 'logo.png',
				'productName' : 'Keetnashak',
				'description' : 'Description should be there.',
				'originalPrice' : 2900,
				'currentPrice' : 2100,
			}
		];

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
					<img src='logo.png' alt='img'/>
					<h5>{d.productName}</h5>
				</Link>)}
			</React.Fragment>}
		</div>
	);
}

export default Orders;
