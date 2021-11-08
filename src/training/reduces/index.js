import sort  from "./sort";
import status  from "./status";
import { combineReducers } from "redux";

var myReduceStore = combineReducers({
    status : status,
    sort : sort
});
export default myReduceStore;