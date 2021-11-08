import * as types from '../constant/ActionType';
var initialState ='';
var myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.SEARCH_TASK:
            console.log(action);
            return action.keyword;
         
        default:
            return state;

            break;
    }
    
    return state;

}
export default myReducer;