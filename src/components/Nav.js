import React from 'react';
import './css/Nav.css';
import { Link } from 'react-router-dom';

function Nav(){
	return(
		<div className='nav'>
			<h4 className='nav-title'>Bhoomi Agro Agency</h4>

			<div className='nav-menu'>
				<Link to='/home' >
					<h6>Home</h6>
				</Link>

				<Link to='/orders' >
					<h6>Orders</h6>
				</Link>

				<Link to='/users' >
					<h6>Users</h6>
				</Link>

				<Link to='/sold' >
					<h6>Sold</h6>
				</Link>
				
			</div>
		</div>
	);
}

export default Nav;
