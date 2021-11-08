var initialState = {
    name : 'name',
    value : 1
}
var myReduceStore = (state,action) =>{
    state = initialState;
    if(action.type === 'SORT'){
        var { name, value} = action.sort;
        return {
            name,value
        }
    }
    return state;
}
export default myReduceStore;