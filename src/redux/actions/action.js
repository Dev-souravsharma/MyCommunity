import RestClient from '../../utils/urls/restApi';
import {actionTypes} from '../actions/actionTypes';
// Login
export const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  };
};

export const loginSuccess = users => {
  console.log('User LoginSuccess', users);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: users,
  };
};

export const loginError = error => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  };
};

// Profile
export const profileRequest = () => {
  return {
    type: actionTypes.PROFILE_REQUEST,
  };
};

export const profileSuccess = users => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    payload: users,
  };
};

export const profileError = error => {
  return {
    type: actionTypes.PROFILE_FAILURE,
    payload: error,
  };
};

// EVENT
export const eventRequest = () => {
  return {
    type: actionTypes.EVENT_REQUEST,
  };
};

export const eventSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.EVENT_SUCCESS,
    payload: users,
  };
};

export const eventError = error => {
  return {
    type: actionTypes.EVENT_FAILURE,
    payload: error,
  };
};

// NEWSFEED
export const newsFeedRequest = () => {
  return {
    type: actionTypes.NEWSFEED_REQUEST,
  };
};

export const newsFeedSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.NEWSFEED_SUCCESS,
    payload: users,
  };
};

export const newsFeedError = error => {
  return {
    type: actionTypes.NEWSFEED_FAILURE,
    payload: error,
  };
};

// Profile
export const editProfileRequest = () => {
  return {
    type: actionTypes.EDIT_PROFILE_REQUEST,
  };
};

export const editProfileSuccess = users => {
  return {
    type: actionTypes.EDIT_PROFILE_SUCCESS,
    payload: users,
  };
};

export const editProfileError = error => {
  return {
    type: actionTypes.EDIT_PROFILE_FAILURE,
    payload: error,
  };
};

// Notification
export const notificationRequest = () => {
  return {
    type: actionTypes.NOTIFICATION_REQUEST,
  };
};

export const notificationSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.NOTIFICATION_SUCCESS,
    payload: users,
  };
};

export const notificationError = error => {
  return {
    type: actionTypes.NOTIFICATION_FAILURE,
    payload: error,
  };
};

// SURVEY LIST
export const surveyListRequest = () => {
  return {
    type: actionTypes.SURVEY_LIST_REQUEST,
  };
};

export const surveyListSuccess = users => {
  console.log('User LoginSuccess', users);
  return {
    type: actionTypes.SURVEY_LIST_SUCCESS,
    payload: users,
  };
};

export const surveyListError = error => {
  return {
    type: actionTypes.SURVEY_LIST_FAILURE,
    payload: error,
  };
};

// Quick Links
export const quickLinksRequest = () => {
  return {
    type: actionTypes.QUICK_LINK_REQUEST,
  };
};

export const quickLinksSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.QUICK_LINK_SUCCESS,
    payload: users,
  };
};

export const quickLinksError = error => {
  return {
    type: actionTypes.QUICK_LINK_FAILURE,
    payload: error,
  };
};

// Logout
export const logOutRequest = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
};

export const logOutSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.LOGOUT_SUCCESS,
    payload: users,
  };
};

export const logOutError = error => {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    payload: error,
  };
};

// POST
export const postRequest = () => {
  return {
    type: actionTypes.POST_REQUEST,
  };
};

export const postSuccess = users => {
  // console.log('User LoginSuccess', users);
  return {
    type: actionTypes.POST_SUCCESS,
    payload: users,
  };
};

export const postError = error => {
  return {
    type: actionTypes.POST_FAILURE,
    payload: error,
  };
};
// ----------ACTION CREATOR----------------------

// Login actionCreator
export function login(email, password, nav, AsyncStorage, ToastAndroid) {
  const data = {
    deviceType: 'iphone',
    // Password is demo
    password: password,

    tokenId: '71fbcd5350c87994c0cd847013039c027a26c68584fe6ec6dd2dc4b38f432ff7',
    // demouser
    username: email,
  };
  return dispatch => {
    dispatch(loginRequest());
    RestClient.postRequest('login', data)
      .then(result => {
        console.log('Action Creator Result====>', result);
        // console.log('Login Processing...');
        dispatch(loginSuccess(result));
        if (result.status === 0) {
          ToastAndroid.showWithGravity(
            'Check Username and Password',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        }
        // console.log('After Login Processing...');
        if (result.status === 1) {
          dispatch(
            navigateToHome(
              result.status,
              nav,
              AsyncStorage,
              result.firstName + ' ' + result.lastName,
              result.profilePic,
              result.userId,
            ),
          );
        }
      })
      .catch(error => {
        // console.log(error);
        dispatch(loginError(error));
      });
  };
}

// Profile actionCreator
export function getProfile(id) {
  const profileData = {
    userId: id,
  };
  return dispatch => {
    dispatch(profileRequest());
    RestClient.postRequest('getuserprofile', profileData)
      .then(result => {
        // console.log(
        //   '------------------------------',
        //   '\n Profile Data',
        //   result,
        // );
        dispatch(profileSuccess(result));
      })
      .catch(error => {
        dispatch(profileError(error));
      });
  };
}

// EVENT action creator
export function getEvent() {
  const eventData = {
    offset: 0,
    userId: 269,
  };
  return dispatch => {
    dispatch(eventRequest());
    RestClient.postRequest('geteventslist', eventData)
      .then(result => {
        console.log('ACTION GETEVENT', result);
        dispatch(eventSuccess(result));
      })
      .catch(error => {
        dispatch(eventError(error));
      });
  };
}

// NewsFeed action creator
export function getNewsFeed() {
  const newsFeedData = {
    authToken: 'v1Rtu@lMan@G3r',
    authUser: 'virtualManager',
    community_id: 268,
    limit: '',
    offset: '',
    user_id: 269,
  };
  return dispatch => {
    dispatch(newsFeedRequest());
    RestClient.postRequest('news_feed_listing', newsFeedData)
      .then(result => {
        console.log('ACTION NewsFeed DATA', result);
        dispatch(newsFeedSuccess(result));
      })
      .catch(error => {
        dispatch(newsFeedError(error));
      });
  };
}

// Edit-Profile action creator
export function getEditProfile(
  fname,
  lname,
  phone,
  commID,
  address,
  state,
  zip,
  image,
  ToastAndroid,
  navigation,
) {
  const editProfileData = {
    address: address,
    city: '',
    communityId: 268,
    email: 'demo@yopmail.com',
    firstName: fname,
    is_allow_push_notification: 1,
    lastName: lname,
    phone: phone,
    state: state,
    userId: 269,
    userImage: image,
    zipcode: zip,
  };
  return dispatch => {
    dispatch(editProfileRequest());
    RestClient.GetEditProfile('edituserprofile', editProfileData)
      .then(result => {
        console.log('Action Creator Result', result);
        dispatch(editProfileSuccess(result));
        // navigation.navigate('Profile');
        if (result.status === 1) {
          ToastAndroid.showWithGravity(
            'Successfully Updated',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        }
        dispatch(getProfile(269));
        dispatch(getNewsFeed());
      })
      .catch(error => {
        // console.log(error);
        dispatch(editProfileError(error));
        dispatch(getProfile(269));
      });
  };
}

// Notification
export function getNotification() {
  const data = {
    community_id: 268,
    offset: 0,
    userId: 269,
  };
  return dispatch => {
    dispatch(notificationRequest());
    RestClient.postRequest('homescreenlist', data)
      .then(result => {
        // console.log('Action Creator Result', result);
        dispatch(notificationSuccess(result));
      })
      .catch(error => {
        // console.log(error);
        dispatch(notificationError(error));
      });
  };
}

// Survey List action creator
export function getSurveyList() {
  const surveyList = {
    authToken: 'v1Rtu@lMan@G3r',
    authUser: 'virtualManager',
    community_id: 268,
    limit: '',
    offset: '',
    user_id: 269,
  };
  return dispatch => {
    dispatch(surveyListRequest());
    RestClient.postRequest('survey-listing', surveyList)
      .then(result => {
        // console.log('ACTION NewsFeed DATA', result);
        dispatch(surveyListSuccess(result));
      })
      .catch(error => {
        dispatch(surveyListError(error));
      });
  };
}

// Quick Links Action Creator
export function getQuickLinks() {
  const quickLinks = {
    communityId: 268,
  };
  return dispatch => {
    dispatch(quickLinksRequest());
    RestClient.postRequest('getmedialist', quickLinks)
      .then(result => {
        // console.log('ACTION NewsFeed DATA', result);
        dispatch(quickLinksSuccess(result));
      })
      .catch(error => {
        dispatch(quickLinksError(error));
      });
  };
}

// LOGOUT action creator
export function getLogout() {
  const logoutData = {
    'deviceType ': 'iphone',
    user_id: 269,
  };
  return dispatch => {
    dispatch(logOutRequest());
    RestClient.postRequest('logout', logoutData)
      .then(result => {
        dispatch(logOutSuccess(result));
      })
      .catch(error => {
        dispatch(logOutError(error));
      });
  };
}

// Post actionCreator
export function getPost(postText, url) {
  if (url === '') {
    url = undefined;
  }
  const formData = new FormData();
  formData.append('authToken', 'v1Rtu@lMan@G3r');
  formData.append('authUser', 'virtualManager');
  formData.append('community_id', 268);
  formData.append('device_type', 2);
  formData.append('is_video', 0);
  formData.append('post', postText);
  formData.append('user_id', 269);
  formData.append('file', {
    uri: url,
    type: 'image/*',
    name: 'photo.jpg',
  });
  console.log('form data', formData);
  return dispatch => {
    dispatch(postRequest());
    RestClient.postPost('add_news_feed', formData)
      .then(result => {
        dispatch(postSuccess(result));
        dispatch(getNewsFeed());
      })
      .catch(error => {
        dispatch(postError(error));
        dispatch(getNewsFeed());
      });
  };
}

// LOGOUT action creator
export function navigateToHome(
  status,
  nav,
  AsyncStorage,
  name,
  profilePic,
  userId,
) {
  if (status === 1) {
    const storeData = async (value, profile, user_Id) => {
      try {
        await AsyncStorage.setItem('isAuth', `${status}`);
        await AsyncStorage.setItem('isName', value);
        await AsyncStorage.setItem('isProfile', profile);
        await AsyncStorage.setItem('isuserId', user_Id);
      } catch (e) {
        console.log(e);
      }
    };
    storeData(name, profilePic, userId);
    nav.replace('NewsFeeds', {
      screen: 'NewsFeed',
    });
  }
}
