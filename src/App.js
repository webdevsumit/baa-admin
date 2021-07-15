import './App.css';
import LoginPage from './components/loginPage';
import HomePage from './components/homePage';
import Description from './components/Description';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

	const  productId  = useSelector((state)=>state.productDescription.productId);
	
  return (
    <div className="App">
    	<Router>
    	
    		<Route path='/' exact>
    			<LoginPage/>
    		</Route>
    		
    		<Route path='/home'>
    			<HomePage/>
    		</Route>

    		<Route path={'/product/'+productId}>
    			<Description/>
    		</Route>
    		
        </Router>
    </div>
  );
}

export default App;
