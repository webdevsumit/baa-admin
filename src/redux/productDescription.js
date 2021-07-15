import { createSlice } from '@reduxjs/toolkit';


export const productDescriptionSlice = createSlice({
	name : 'productDescription',
	initialState : {
		productId : 0,
	},
	reducers : {
	
		setProductId : (state, action) =>{
			state.productId = action.payload;
		}
	}
});


export const { setProductId } = productDescriptionSlice.actions;

const productDescriptionReducer =  productDescriptionSlice.reducer;

export default productDescriptionReducer;
