import * as actionTypes from './actions';

const initialState ={
	countryName:'India',
};
const reducer=(state = initialState, action)=>{

	console.log("reducer", action.payload);
	switch(action.type){
		case actionTypes.COUNTRY_NAME:
			return{
				...state,
				countryName:action.payload,
			}
			default:
      return state;
	}
}

export default reducer;