import { combineReducers } from "redux";
import countReducer from "./counter";
import loggedReducer from "./listLogged";

const allReducers =  combineReducers({
    counter : countReducer,
    isLogged : loggedReducer
})

export default allReducers;