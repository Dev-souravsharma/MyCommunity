import loginData from './loginData';
import profileData from './profileData';
import eventData from './eventData';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  loginData,
  profileData,
  eventData,
});
export default rootReducer;
