import React, { useState } from 'react';
import './css/loginPage.css';
import { Redirect } from 'react-router-dom';

function LoginPage(){

	const [showPass, setShowPass] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const passToggle=(e)=>{
		e.preventDefault();
		setShowPass(!showPass);
	}

	const onLogin=e=>{
		e.preventDefault();
		alert(username+"  "+password);
		setUsername('');
		setPassword('');
		setRedirect(true);
	}

	if(redirect) return(<Redirect to='/home'/>);
	
	return(
		<div className='login-page'>

			<h2 className='title'>Bhoomi Agro Agency Admin</h2>
			
			<form method='post' className='login-page'>
				<input 
					onChange={e=>setUsername(e.target.value)} 
					value={username}
					type='text' 
					placeholder='Username'/>

				<div>
					<input 
						onChange={e=>setPassword(e.target.value)} 
						value={password}
						className='password' 
						type={showPass?'text':'password'} 
						placeholder='Password'/>
					
					<h6 className='hide-btn' onClick={passToggle}>{showPass?'hide':'show'}</h6>
				</div>
				
				<button type='submit' className='login-btn' onClick={onLogin}>Login</button>
			</form>
		</div>
	);
}

export default LoginPage;
