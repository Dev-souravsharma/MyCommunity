import loginData from './loginData';
import profileData from './profileData';
import eventData from './eventData';
import newsFeed from './newsFeed';
import editProfile from './editProfile';
import notification from './notification';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  loginData,
  profileData,
  eventData,
  newsFeed,
  editProfile,
  notification,
});

export default rootReducer;
