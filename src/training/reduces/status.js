var initialState = false;
var myReduceStore = (state = initialState,action) =>{
    if(action.type === 'TOGGLE_STATUS'){
        state = !state; 
        return state;

    }
   
    return state;
}
export default myReduceStore;