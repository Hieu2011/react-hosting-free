import * as types from '../constant/ActionType';
var initialState ={
    by : 'name',
    value : 1 // 1 tăng, -1 giảm
};
var myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.SORT_TASK:
            return {
                by : action.sort.by,
                value: parseInt(action.sort.value,10)
            };
        
        default:
            return state;

            break;
    }
    
    return state;

}
export default myReducer;