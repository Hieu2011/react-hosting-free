import * as types from '../constant/ActionType';

var s4 = ()=>{
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
}
var getGenderid = ()=>{
    return s4() + s4() + '-' + s4() + s4() + '-' + s4()+ s4();
}
var findId = (tasks,id)=>{
    
    var result = -1;
    tasks.forEach((task,index)=>{
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.LIST_ALL:
            return state;
            break;
        case types.SAVE_TASK:
            console.log(action);
            var task = {
                id: action.task.id,
                name : action.task.name,
                status: action.task.status 
            }
            if(!task.id){
                task.id = getGenderid();
                state.push(task);

            }else{
                

                var index = findId(state,task.id);
                state[index] = task;
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
            break;
        case types.UPDATE_STATUS_TASK:
            console.log(action);
            var id = action.id;
            var index = findId(state,id);
            if(index != -1){
                //cách 1
                // var clonetask = {...state[index]};
                // clonetask.status = !clonetask.status;
                // state[index] = clonetask;

                //cách 2
                state[index] = {
                    ...state[index],
                    status : !state[index].status
                }

                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];
        case types.DELETE_TASK:
            console.log(action);
            var id = action.id;
            var index = findId(state,id);
            if(index != -1){
                //cách 1
                var clonetask = state;
                console.log(clonetask);
                clonetask.splice(index,1);
                state = clonetask;

                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state];
        default:
            return state;

            break;
    }
    
    return state;

}
export default myReducer;