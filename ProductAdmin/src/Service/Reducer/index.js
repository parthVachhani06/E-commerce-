import { combineReducers } from "redux";
import {signUpReducer} from "./signUpReducer";
import {producReducer} from "./productReducer"

export const rootReducer = combineReducers({
    signUpReducer,
    producReducer,
   
})