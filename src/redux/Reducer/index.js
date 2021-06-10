import loginData from './loginData';
import profileData from './profileData';
import eventData from './eventData';
import newsFeed from './newsFeed';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  loginData,
  profileData,
  eventData,
  newsFeed,
});
export default rootReducer;
