import loginData from './loginData';
import profileData from './profileData';
import eventData from './eventData';
import newsFeed from './newsFeed';
import editProfile from './editProfile';
import notification from './notification';
import surveyList from './surveyList';
import quickLinks from './quickLinks';
import logout from './logout';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  loginData,
  profileData,
  eventData,
  newsFeed,
  editProfile,
  notification,
  surveyList,
  quickLinks,
  logout,
});

export default rootReducer;
