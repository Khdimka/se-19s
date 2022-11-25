import { combineReducers } from 'redux';
import targetReducer from './targetReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({ 
    targets: targetReducer,
    auth: authReducer

})

export default rootReducer;