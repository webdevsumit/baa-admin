import { configureStore } from '@reduxjs/toolkit';
import productDescriptionReducer from './productDescription';


const store =  configureStore({
	reducer : {
		productDescription : productDescriptionReducer,
	}
});


export default store;


