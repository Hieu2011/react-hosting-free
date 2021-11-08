import { createStore } from "redux";
import {status, sort} from "./action/index";
import myReduceStore from "./reduces/index";

const store = createStore(myReduceStore);
console.log('Default' ,store.getState());

var action = {
    type : 'TOGGLE_STATUS'
}
store.dispatch(status());
console.log('TOGGLE_STATUS: ' , store.getState());


store.dispatch(sort({
    name : 'name2',
    value : -1
}));
console.log('SORT: ' , store.getState());

