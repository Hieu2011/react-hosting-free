import * as types from '../constant/ActionType';
var initialState =false;
var myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.TOGGLE_FORM:

            return !state;
            break;
        case types.OPEN_FORM:

            return true;
            break;
        case types.CLOSE_FORM:

            return false;
            break;
        default:
            return state;

            break;
    }
    
    return state;

}
export default myReducer;