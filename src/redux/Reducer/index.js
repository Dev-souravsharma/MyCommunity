import loginData from './loginData';
import profileData from './profileData';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  loginData,
  profileData,
});
export default rootReducer;
