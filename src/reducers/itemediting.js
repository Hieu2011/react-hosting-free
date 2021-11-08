import * as types from '../constant/ActionType';
var initialState ={
    id: '',
    name: '',
    status: false
};
var myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        
        default:
            return state;

            break;
    }
    
    return state;

}
export default myReducer;